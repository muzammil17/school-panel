import React, { Component } from "react";
import FormInput from "./FormInput";
import SubmitButton from "./submitButton";
import LoadingButton from "./loadingButton";
import { Api } from "../../common/Api";
import { Alert } from "reactstrap";

class AddParent extends Component {
  state = {
    FatherName: "",
    ContactNo: "",
    Address: "",
    PermanentAddress: "",
    FCNIC: "",
    Email: "",
    FImage: null,
    FOccupation: "",
    FatherNameError: "",
    ContactNoError: "",
    AddressError: "",
    PermanentAddressError: "",
    FCNICError: "",
    EmailError: "",
    FOccupationError: "",
    loading: false,
    success: false,
    errorText: "",
  };

  handleChange = (e) => {
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
      FImage: e.target.files,
    });
  };
  submit = (e) => {
    e.preventDefault();

    var validation = true;
    if (this.state.FatherName === "") {
      this.setState({
        FatherNameError: "* Father name is required",
      });
      validation = false;
    }

    if (this.state.ContactNo === "") {
      this.setState({
        ContactNoError: "* Contact number is required",
      });
      validation = false;
    }

    if (this.state.Address === "") {
      this.setState({
        AddressError: "* Address is required",
      });
      validation = false;
    }

    if (this.state.PermanentAddress === "") {
      this.setState({
        PermanentAddressError: "* Permanent Address is required",
      });
      validation = false;
    }

    if (this.state.Email === "") {
      this.setState({
        EmailError: "* Email is required",
      });
      validation = false;
    }

    if (this.state.FCNIC === "") {
      this.setState({
        FCNICError: "* Father CNIC is required",
      });
      validation = false;
    }

    if (this.state.FOccupation === "") {
      this.setState({
        FOccupationError: "* Father Occupation is required",
      });
      validation = false;
    }
    console.log(validation);
    if (validation) {
      let data = new FormData();
      data.append("FatherName", this.state.FatherName);
      data.append("Address", this.state.Address);
      data.append("ContactNo", this.state.ContactNo);
      data.append("PermanentAddress", this.state.PermanentAddress);
      data.append("Email", this.state.Email);
      data.append("FCNIC", this.state.FCNIC);
      data.append("FOccupation", this.state.FOccupation);
      if (this.state.FImage !== null) {
        data.append("FImage", this.state.FImage);
      }

      console.log(data)
      this.setState({
        loading: true,
      });

      for (var value of data.values()) {
        console.log(value);
     }
      Api("parents", "post", data)
        .then((res) => {
          console.log(res);
          if (res.data.status !== "fail") {
            this.setState({
              loading: false,
              success: true,
            });
          } else {
            let errorMessages = res.data.message;
            Object.keys(errorMessages).map((msgKey) => {
              this.setState({
                [`${msgKey}Error`]: errorMessages[msgKey],
                loading: false,
              });
            });
          }
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            loading: false,
          });
          if (err.response) {
            this.setState({
              errorText: err.response.data.message,
            });
          } else {
            this.setState({
              errorText: "* Network error",
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
            <div className="row">
              <div className=" col-md-6 col-sm-12">
                <div className="form-group">
                  <label htmlFor="exampleFormControlFile1">Add Image : </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="exampleFormControlFile1"
                    name="FImage"
                    onChange={this.handleImage}
                  />
                </div>
              </div>
            </div>

            <FormInput
              type="text"
              labelFor="fatherName"
              Label="Name :"
              onChange={this.handleChange}
              placeHolder="Father Name"
              name="FatherName"
            />
            <small style={{ color: "#f86c6b" }}>
              {this.state.FatherNameError}
            </small>
            <FormInput
              type="tel"
              labelFor="number"
              Label="Contact No :"
              onChange={this.handleChange}
              placeHolder="034512345678"
              name="ContactNo"
            />
            <small style={{ color: "#f86c6b" }}>
              {this.state.ContactNoError}
            </small>
            <FormInput
              type="text"
              labelFor="address"
              Label="Address : "
              onChange={this.handleChange}
              placeHolder="street 4"
              name="Address"
            />
            <small style={{ color: "#f86c6b" }}>
              {this.state.AddressError}
            </small>
            <FormInput
              type="text"
              labelFor="permanentAddress"
              Label="Permanent Address : "
              onChange={this.handleChange}
              placeHolder="street 4"
              name="PermanentAddress"
            />
            <small style={{ color: "#f86c6b" }}>
              {this.state.PermanentAddressError}
            </small>
            <FormInput
              type="text"
              labelFor="cnic"
              Label="Father CNIC : "
              onChange={this.handleChange}
              placeHolder="42201-12121212-1"
              name="FCNIC"
            />
            <small style={{ color: "#f86c6b" }}>{this.state.FCNICError}</small>
            <FormInput
              type="main"
              labelFor="main"
              Label="Email : "
              onChange={this.handleChange}
              placeHolder="example123@gmail.com"
              name="Email"
            />
            <small style={{ color: "#f86c6b" }}>{this.state.EmailError}</small>
            <FormInput
              type="text"
              labelFor="fatherOccupation"
              Label="Father Occupation : "
              onChange={this.handleChange}
              placeHolder="Buisness man"
              name="FOccupation"
            />
            <small style={{ color: "#f86c6b" }}>
              {this.state.FOccupationError}
            </small>

            {this.state.errorText !== "" && (
              <Alert color="danger" className="mt-3">
                {this.state.errorText}
              </Alert>
            )}

            {this.state.success && (
              <Alert color="success" className="mt-3">
                Data successfully submitted
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
export default AddParent;
