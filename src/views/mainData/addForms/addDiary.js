import React, { Component } from "react";
import FormInput from "./FormInput";
import SubmitButton from "./submitButton";
import { Api } from "../../common/Api";
import { Alert } from "reactstrap";
import LoadingButton from "./loadingButton";
import SelectComponent from "../selectComponent";

class AddDiary extends Component {
  state = {
    classArray: [],
    subjectArray: [],
    title: "",
    titleError: "",
    description: "",
    descriptionError: "",
    type: "",
    typeError: "",
    subject: "",
    classes: "",
    errorText: "",
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
  componentDidMount() {
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
  }
  submit = (e) => {
    e.preventDefault();
    var validation = true;
    if (this.state.title == "") {
      this.setState({
        titleError: "* Title is required",
      });
      validation = false;
    }
    if (this.state.classes == "") {
      this.setState({
        classesError: "* Class is required",
      });
      validation = false;
    }
    if (this.state.subject == "") {
      this.setState({
        subjectError: "* Subject is required",
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
    if (validation) {
      const formData = new FormData();
      formData.append("class_id", this.state.classes);
      formData.append("subject_id", this.state.subject);
      formData.append("title", this.state.title);
      formData.append("type", this.state.type);
      formData.append("body", this.state.description);
      this.setState({
        loading: true,
      });
      Api("notice", "post", formData)
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
  };
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card ">
          <form className="form card-body">
            <SelectComponent
              title="Class"
              name="classes"
              disabledOption="Select Class"
              options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              handleChange={this.handleChange}
            />
            <small style={{ color: "#f86c6b" }}>
              {this.state.classesError}
            </small>

            <SelectComponent
              title="Subject"
              name="subject"
              disabledOption="Select Subject"
              options={["urdu", "english", "science", "Mathematics"]}
              handleChange={this.handleChange}
            />

            <small style={{ color: "#f86c6b" }}>
              {this.state.subjectError}
            </small>
            <FormInput
              Label="Title :"
              forLabel="title"
              type="text"
              placeHolder="Title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <small style={{ color: "#f86c6b" }}>{this.state.titleError}</small>
            <FormInput
              Label="Type :"
              forLabel="type"
              type="text"
              placeHolder="Math"
              name="type"
              value={this.state.type}
              onChange={this.handleChange}
            />
            <small style={{ color: "#f86c6b" }}>{this.state.typeError}</small>
            <div className="row">
              <div className="col-sm-12 formInput" cols="">
                <label htmlFor="description">Details :</label>
                <textarea
                  placeholder="Describe Homework..."
                  className="p-3"
                  rows="5"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                ></textarea>
                <small style={{ color: "#f86c6b" }}>
                  {this.state.descriptionError}
                </small>
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

export default AddDiary;
