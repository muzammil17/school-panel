import React, { Component } from "react";
import FormInput from "./FormInput";
import SubmitButton from "./submitButton";
import { Api } from "../../common/Api";
import { Alert } from "reactstrap";
import moment from "moment";
import LoadingButton from "./loadingButton";
import SelectComponent from "../selectComponent";

class AddCircular extends Component {
  state = {
    classArray: [],
    title: "",
    description: "",
    date: moment(new Date()).format("YYYY-MM-DD"),
    loading: false,
    titleError: "",
    descriptionError: "",
    classesError: "",
    dateError: "",
    errorText: "",
    classes: "All",
    success: false,
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
  submit = (e) => {
    e.preventDefault();
    console.log("Submit", this.state.date);

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
    if (this.state.description == "") {
      this.setState({
        descriptionError: "* Description is required",
      });
      validation = false;
    }
    if (validation) {
      var data = {
        title: this.state.title,
        details: this.state.description,
        circularFor: this.state.classes,
        circularDate: this.state.date,
      };

      console.log(data);
      this.setState({
        loading: true,
      });
      Api("circular", "post", data)
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
        <div className="card">
          <form className="form card-body">
            <FormInput
              Label="Title :"
              forLabel="title"
              type="text"
              placeHolder="Chemistry"
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
            <small style={{ color: "#f86c6b" }}>{this.state.dateError}</small>

            <SelectComponent
              title="Class"
              name="classes"
              disabledOption="Select Class"
              options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              handleChange={this.handleChange}
            />

            <div className="row">
              <div className="col-sm-12 formInput" cols="">
                <label htmlFor="description">Description :</label>
                <textarea
                  placeholder="Describe Yourself..."
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

export default AddCircular;
