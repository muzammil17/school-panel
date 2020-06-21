import React, { Component } from "react";
import FormInput from "./FormInput";
import SubmitButton from "./submitButton";
import { Api } from "../../common/Api";
import moment from "moment";
import { serverUrlImage } from "../../utils/Constants";
import LoadingButton from "../addForms/loadingButton";
import { Alert } from "reactstrap";

class EditDiary extends Component{
  state={
    news: null,
    id: '',
    title: '',
    classArray: [],
    subjectArray: [],
    description: '',
    type: '',
    errorText: '',
    Image: null,
    ImageData: null,
    loadingPage: true

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
      Api("subject", "get")
      .then((response) => {
        console.log(response.data);
        this.setState({
          subjectArray: response.data.subject,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
      Api('notice/'+this.props.match.params.diaryId, 'get')
      .then(response=>{
        console.log(response.data);
        var notice = response.data.notice
        this.setState({
          news: notice,
          id: notice.id,
          title: notice.title,
          description: notice.body,
          type: notice.type,
          subject: notice.subject_id,
          loadingPage: false
        })
        if(!notice.class_id){
          this.setState({
            classes: notice.class
          })
        }
        else{
          this.setState({
            classes: notice.class_id
          })
        }
      })
      .catch(error=>{
        console.log(error.response);
      }) 
  }
  handleImage = (e) => {
    console.log(e.target.files);
    this.setState({
      Image: e.target.files[0],
    });
  };
  submit=(e)=>{
    e.preventDefault();
    var validation = true;
    if (this.state.title == "") {
      this.setState({
        titleError: "* Title is required",
      });
      validation = false;
    }
    if (this.state.description == "") {
      this.setState({
        descriptionError: "* Description is required",
      });
      validation = false;
    }
    if (this.state.type == "") {
      this.setState({
        typeError: "* Type is required",
      });
      validation = false;
    }
    if(validation){
      const formData = new FormData(); 
      formData.append('class_id', this.state.classes)
			formData.append('subject_id', this.state.subject)
			formData.append('title', this.state.title)
			formData.append('type', this.state.type)
			formData.append('body', this.state.description)
      this.setState({
        loading: true,
      });
      Api("notice/"+this.state.id, "post", formData)
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
    if (this.state.loadingPage) {
      return <p>loading...</p>;
    }
  return (
    <div className="animated fadeIn">
      <div className="card ">
        <form className="form card-body">
          
          <FormInput
            Label="Title :"
            forLabel="title"
            type="text"
            placeHolder="Holiday"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <small style={{ color: "#f86c6b" }}>{this.state.titleError}</small>
          <FormInput
            Label="Type :"
            forLabel="dateTeacher"
            type="text"
            name="type"
            value = {this.state.type}
            onChange={this.handleChange}
            placeHolder=""
          />
          <small style={{ color: "#f86c6b" }}>{this.state.titleError}</small>
          <div className="row">
            <div className="col-sm-12 formInput">
              <div className="form-group">
                <label htmlFor="sel1">Class :</label>
                <select className="form-control select" id="sel1" name="classes" value={this.state.classes}  onChange={this.handleChange}>
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
            <div className="col-sm-12 formInput">
              <div className="form-group">
                <label htmlFor="sel1">Subject :</label>
                <select className="form-control select" id="sel1" name="subject" value={this.state.subject}  onChange={this.handleChange}>
                 {this.state.subjectArray.map((element) => {
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
              <label htmlFor="description">Details :</label>
              <textarea
                placeholder="Describe Diary details..."
                className="p-3"
                rows="5"
                value = {this.state.description}
                onChange={this.handleChange}
                name="description"
              ></textarea>
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
}

export default EditDiary;
