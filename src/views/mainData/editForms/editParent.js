import React, { Component } from "react";
import FormInput from "./FormInput";
import SubmitButton from "./submitButton";
import LoadingButton from "../addForms/loadingButton";
import { Api } from "../../common/Api";
import { Alert } from "reactstrap";
import { serverUrlImage } from "../../utils/Constants";

class EditParent extends Component {
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
    parentData: null,
    FImageData: null
  };

  componentDidMount() {
    let id = this.props.match.params.parentId;
    let data = {
      parentId: id,
      type: "parents",
    };
    Api("parents/" + id, "get")
      .then((res) => {
        console.log(res);
        this.setState({
          parentData: res.data.parents,
          FatherName: res.data.parents.FatherName,
          ContactNo: res.data.parents.ContactNo,
          Address: res.data.parents.Address,
          PermanentAddress: res.data.parents.PermanentAddress,
          FCNIC: res.data.parents.FCNIC,
          Email: res.data.parents.Email,
          FOccupation: res.data.parents.FOccupation,
          loading: false,
        });
        if(res.data.parents.FImage){
          this.setState({
            FImageData: res.data.parents.FImage
          })
        }
      })
      .catch((err) => console.log(err));
  }

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
      FImage: e.target.files[0],
    });
  };
  submitButton = (e) => {
    e.preventDefault();
    console.log("hello");

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
    console.log(validation, this.state.FImage);
    if (validation) {
      let data = new FormData();
      data.append("FatherName", this.state.FatherName);
      data.append("Address", this.state.Address);
      data.append("ContactNo", this.state.ContactNo);
      data.append("PermanentAddress", this.state.PermanentAddress);
      data.append("Email", this.state.Email);
      data.append("FCNIC", this.state.FCNIC);
      data.append("FOccupation", this.state.FOccupation);
      if (this.state.FImage !== null && this.state.FImage !== undefined) {
        data.append("FImage", this.state.FImage);
      }

      this.setState({
        loading: true,
      });
      let id = this.props.match.params.parentId;

        for (var value of data.values()) {
          console.log(value);
       }

      Api(`parents/${id}`, "post", data)
        .then((res) => {
          console.log(res);
          if (res.data.status !== "fail") {
            this.setState({
              loading: false,
              success: true,
            });
            this.componentDidMount();
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
          console.log(err.response);
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
    // console.log(this.state.parentData);
    const { parentData } = this.state;
    if (parentData === null) return <h2>Loading</h2>;

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
                    defaultValue={this.state.FImage}
                  />
                </div>
              </div>
            </div>
            {this.state.FImageData !== null && (
              <React.Fragment>
                <div className="row">
                  <div className=" col-6 col-sm-3 ">
                    <img src={serverUrlImage + this.state.FImageData} style={{height: 150}} />
                  </div>
                  {/* <div className="col-sm-4 col-8">
                    <span className="float-left ">abc.png</span>
                  </div> */}
                </div>
                <hr></hr>
              </React.Fragment>
            )}

            <FormInput
              type="text"
              labelFor="fatherName"
              Label="Name :"
              onChange={this.handleChange}
              placeHolder="Father Name"
              name="FatherName"
              value={this.state.FatherName}
            />
            <small style={{ color: "#f86c6b" }}>
              {this.state.FatherNameError}
            </small>
            <FormInput
              value={this.state.ContactNo}
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
              value={this.state.Address}
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
              value={this.state.PermanentAddress}
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
              value={this.state.FCNIC}
              type="text"
              labelFor="cnic"
              Label="Father CNIC : "
              onChange={this.handleChange}
              placeHolder="42201-12121212-1"
              name="FCNIC"
            />
            <small style={{ color: "#f86c6b" }}>{this.state.FCNICError}</small>
            <FormInput
              value={this.state.Email}
              type="main"
              labelFor="main"
              Label="Email : "
              onChange={this.handleChange}
              placeHolder="example123@gmail.com"
              name="Email"
            />
            <small style={{ color: "#f86c6b" }}>{this.state.EmailError}</small>
            <FormInput
              value={this.state.FOccupation}
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
              <SubmitButton onClick={this.submitButton} />
            )}
          </form>
        </div>
      </div>
    );
  }
}
export default EditParent;
