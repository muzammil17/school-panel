import React, { Component } from "react";
import FormInput from "./FormInput";
import SubmitButton from "./submitButton";
import { Api } from "../../common/Api";
import moment from "moment";
import { serverUrlImage } from "../../utils/Constants";
import LoadingButton from "../addForms/loadingButton";
import { Alert } from "reactstrap";

class EditEvent extends Component {
  state = {
    title: "",
    venue: '',
    description: "",
    date: moment(new Date()).format("YYYY-MM-DD"),
    loading: false,
    titleError: "",
    descriptionError: "",
    dateError: "",
    errorText: "",
    file: null,
    success: false,
    Image: null,
    ImageData: null
  };
  handleChange = (e) => {
    console.log(e.target.name, e.target.value);

    this.setState({
      [e.target.name]: e.target.value,
      errorText: "",
      [e.target.name + "Error"]: "",
      success: false,
    });
  };
  handleImage = (e) => {
    console.log(e.target.files);
    this.setState({
      Image: e.target.files[0],
    });
  };
  componentDidMount() {
    // var data= JSON.parse(this.props.location.state.search)
    Api('event/' + this.props.match.params.eventId, 'get')
      .then(response => {
        console.log(response.data);
        var event = response.data.event;
        this.setState({
          id: event.id,
          loading: false,
            title: event.name,
            venue: event.venue,
          description: event.details,
          date: event.Edate
        })
        if(event.thumbnail){
          this.setState({
            ImageData: event.thumbnail
          })
        }
      })
      .catch(error => {
        console.log(error.response);
      })
  }
  submit=(e)=>{
    e.preventDefault();
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
    if(this.state.venue == ''){
      this.setState({
        venueError: '* Venue cannot be empty'
      })
      validation = false
    }
    if(validation){
      const formData = new FormData(); 
      if(this.state.Image){
        formData.append('EventImage',this.state.Image)
      }
      formData.append('Edate',this.state.date)		
      formData.append('name', this.state.title)
      formData.append('venue', this.state.venue)
      formData.append('details', this.state.description)
      this.setState({
        loading: true,
      });
      Api("event/"+this.state.id, "post", formData)
        .then((response) => {
          console.log(response);
          this.setState({
            loading: false,
            success: true,
          });
          this.componentDidMount();
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
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card ">
          <form className="form card-body">
           <div className="row">
              <div className=" col-md-6 col-sm-12">
                <div className="form-group">
                  <label htmlFor="exampleFormControlFile1">Change Image : </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="exampleFormControlFile1"
                    name="FImage"
                    onChange={this.handleImage}
                    defaultValue={this.state.Image}
                  />
                </div>
              </div>
            </div>
          {this.state.ImageData !== null && (
              <React.Fragment>
                <div className="row">
                  <div className=" col-6 col-sm-3 ">
                    <img src={serverUrlImage + this.state.ImageData} style={{height: 150}} />
                  </div>
                </div>
                <hr></hr>
              </React.Fragment>
            )}
            <FormInput
              Label="Title :"
              forLabel="title"
              type="text"
              placeHolder="Beach Party"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <small style={{ color: "#f86c6b" }}>{this.state.titleError}</small>
            <FormInput
              Label="Date :"
              forLabel="date"
              type="date"
              placeHolder=""
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
            <FormInput
              Label="venue :"
              forLabel="Venue"
              type="text"
              name="venue"
              value={this.state.venue}
              onChange={this.handleChange}
              placeHolder="Street 4"
            />
            <small style={{ color: "#f86c6b" }}>{this.state.venueError}</small>
            <div className="row">
              <div className="col-sm-12 formInput" cols="">
                <label htmlFor="description">Details :</label>
                <textarea
                  placeholder="Event Detail..."
                  className="p-3"
                  rows="5"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
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
}

export default EditEvent;
