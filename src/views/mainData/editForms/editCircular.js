import React, { Component } from "react";
import FormInput from "./FormInput";
import SubmitButton from "./submitButton";
import { Api } from "../../common/Api";
import moment from "moment";
import LoadingButton from "../addForms/loadingButton";
import { Alert } from "reactstrap";

class EditCircular extends Component {
  state={
    circular: null,
    id: '',
    title: '',
    classArray: [],
    description: '',
    errorText: ''

  }
  handleChange = (e) => {
    console.log(e.target.name, e.target.value);

    this.setState({
      [e.target.name]: e.target.value,
      errorText: "",
      [e.target.name + "Error"]: "",
      success: false,
    });
  };
  componentDidMount(){
      Api("class", "get")
      .then((response) => {
        console.log(response.data);
        this.setState({
          classArray: response.data.class,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
      Api('circular/'+this.props.match.params.circularId, 'get')
      .then(response=>{
        console.log(response.data);
        var circular = response.data.circular
        this.setState({
          circular: circular,
          id: circular.id,
          title: circular.title,
          date: moment(new Date(circular.circularDate)).format("YYYY-MM-DD"),
          description: circular.details
        })
        if(!circular.class_id){
          this.setState({
            classes: circular.class
          })
        }
        else{
          this.setState({
            classes: circular.class_id
          })
        }
      })
      .catch(error=>{
        console.log(error.response);
      }) 
  }
  submit=(e)=>{
    e.preventDefault();
    var validation = true;
    if(this.state.title == ''){
      this.setState({
        titleError: '* Title cannot be empty'
      })
      validation = false;
    }
    if(this.state.description == ''){
      this.setState({
        descriptionError: '* Description cannot be empty'
      })
      validation = false
    }
    if(validation){
      var data = {
        title: this.state.title,
        details: this.state.description,
        circularFor: this.state.classes,
        circularDate: this.state.date,
      };
      Api("circular/"+ this.state.id , "post", data)
        .then((response) => {
          console.log(response);
          this.setState({
            loading: false,
            success: true,
          });
        })
        .catch((error) => {
          console.log(error);
          this.setState({
            loading: false,
          });
          if (error.response) {
            console.log(error.response);
            this.setState({
              errorText: error.response.data.message,
            });
          } else {
            this.setState({
              errorText: "* Network Error",
            });
          }
        });
    }
  }
  render(){
    console.log(this.state.circular)
  return (
    <div className="animated fadeIn">
      <div className="card">
        <form className="form card-body">
          <FormInput
            Label="Title :"
            forLabel="title"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeHolder="Chemistry"
          />
          <small style={{ color: "#f86c6b" }}>{this.state.titleError}</small>
          <FormInput
            Label="Date :"
            forLabel="dateTeacher"
            type="date"
            name="date"
            value = {this.state.date}
            onChange={this.handleChange}
            placeHolder=""
          />

          <div className="row">
            <div className="col-sm-12 formInput">
              <div className="form-group">
                <label htmlFor="sel1">Class :</label>
                <select className="form-control select py-2 px-3" id="sel1" name="classes" value={this.state.classes}  onChange={this.handleChange} >
                  <option value="All">All</option>
                   {this.state.classArray.map((element) => {
                      return (
                        <option key={element.id} value={element.id}>
                          {element.name}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 formInput" cols="">
              <label htmlFor="description">Description :</label>
              <textarea
                value = {this.state.description}
                onChange={this.handleChange}
                name="description"
                placeholder="Describe Yourself..."
                className="p-3"
                rows="5"
              ></textarea>
              <small style={{ color: "#f86c6b" }}>{this.state.descriptionError}</small>
            </div>
          </div>
          {this.state.errorText != "" && (
              <Alert color="danger" className="mt-3">
                {this.state.errorText}
              </Alert>
            )}
            {this.state.success && (
              <Alert color="success" className="mt-3">
                Data successfully submitted.
              </Alert>
            )}
            {this.state.loading ? (
              <LoadingButton />
            ) : (
              <SubmitButton onClick={this.submit} />
            )}
        </form>
      </div>
    </div>
  );
  }
};

export default EditCircular;
