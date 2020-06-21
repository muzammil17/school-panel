import React, { Component } from "react";
import { Api } from "../../common/Api";
import FormInput from "./FormInput";
import SubmitButton from "./submitButton";
import LoadingButton from "./loadingButton";
import { Alert } from "reactstrap";
import SelectComponent from "../selectComponent";

class AddTeacher extends Component {
  state = {
    FirstName: "",
    LastName: "",
    FatherName: "",
    ContactNo: "",
    Address: "",
    PermanentAddress: "",
    CNIC: "",
    Email: "",
    DOB: "",
    JoiningDate: "",
    Salary: "",
    Department: "",
    Designation: "",
    Gender: "",
    TeacherImage: null,
    maritalStatus: "",
    loan: "",
    totalLoan: "",

    // errors

    FirstNameError: "",
    LastNameError: "",
    FatherNameError: "",
    ContactNoError: "",
    AddressError: "",
    PermanentAddressError: "",
    CNICError: "",
    EmailError: "",
    DOBError: "",
    JoiningDateError: "",
    SalaryError: "",
    DepartmentError: "",
    DesignationError: "",
    GenderError: "",
    maritalStatusError: "",
    loanError: "",
    totalloanError: "",
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
    if (this.state.FirstName === "") {
      this.setState({
        FirstNameError: "* First name is required",
      });
      validation = false;
    }
    if (this.state.LastName === "") {
      this.setState({
        LastNameError: "* Last name is required",
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

    if (this.state.CNIC === "") {
      this.setState({
        CNICError: "* CNIC is required",
      });
      validation = false;
    }

    if (this.state.DOB === "") {
      this.setState({
        DOBError: "* date of birth is required",
      });
      validation = false;
    }
    if (this.state.Gender === "") {
      this.setState({
        GenderError: "* Gender is required",
      });
      validation = false;
    }
    if (this.state.maritalStatus === "") {
      this.setState({
        maritalStatusError: "* martial Status is required",
      });
      validation = false;
    }
    if (this.state.JoiningDate === "") {
      this.setState({
        JoiningDateError: "* Joining date is required",
      });
      validation = false;
    }
    if (this.state.Designation === "") {
      this.setState({
        DesignationError: "* Designation is required",
      });
      validation = false;
    }
    if (this.state.Department === "") {
      this.setState({
        DepartmentError: "* date of birth is required",
      });
      validation = false;
    }
    if (this.state.salary === "") {
      this.setState({
        salaryError: "* date of birth is required",
      });
      validation = false;
    }
    if (this.state.Loan === "") {
      this.setState({
        LoanError: "* Loan Amount is required",
      });
      validation = false;
    }
    if (this.state.totalLoan === "") {
      this.setState({
        totalLoanError: "* Loan Amount is required",
      });
      validation = false;
    }

    console.log(validation);
    if (validation) {
      let data = new FormData();
      data.append("FirstName", this.state.FirstName);
      data.append("LastName", this.state.LastName);
      data.append("FatherName", this.state.FatherName);
      data.append("Address", this.state.Address);
      data.append("ContactNo", this.state.ContactNo);
      data.append("PermanentAddress", this.state.PermanentAddress);
      data.append("Email", this.state.Email);
      data.append("CNIC", this.state.CNIC);
      data.append("DOB", this.state.DOB);
      data.append("Gender", this.state.Gender);
      data.append("maritalStatus", this.state.maritalStatus);
      data.append("JoiningDate", this.state.JoiningDate);
      data.append("Designation", this.state.Designation);
      data.append("Department", this.state.Department);
      data.append("Salary", this.state.Salary);
      data.append("loan", this.state.Loan);
      data.append("totalLoan", this.state.totalLoan);
      if (this.state.FImage !== null) {
        data.append("FImage", this.state.FImage);
      }

      console.log(data);
      this.setState({
        loading: true,
      });

      for (var value of data.values()) {
        console.log(value);
      }

      Api("teacher", "post", data)
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
            console.log(err.response.data);
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
    // console.log(this.state)
    return (
      <div className="animated fadeIn">
        <div className="card">
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
              labelFor="firstName"
              Label="First Name :"
              onChange={this.handleChange}
              placeHolder="First Name"
              name="FirstName"
            />

            <FormInput
              type="text"
              labelFor="LastName"
              Label="Last Name :"
              onChange={this.handleChange}
              placeHolder="Last Name"
              name="LastName"
            />

            <FormInput
              type="text"
              labelFor="FatherName"
              Label="Father's Name :"
              onChange={this.handleChange}
              placeHolder="Father Name"
              name="FatherName"
            />

            <FormInput
              type="tel"
              labelFor="number"
              Label="Contact No :"
              onChange={this.handleChange}
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
              onChange={this.handleChange}
              placeHolder="42201-12121212-1"
              name="CNIC"
            />
            <small style={{ color: "#f86c6b" }}>{this.state.CNICError}</small>
            <FormInput
              type="main"
              labelFor="main"
              Label="Email : "
              onChange={this.handleChange}
              onChange={this.handleChange}
              placeHolder="example123@gmail.com"
              name="Email"
            />
            <small style={{ color: "#f86c6b" }}>{this.state.EmailError}</small>

            <FormInput
              type="date"
              labelFor="date"
              Label="Date Of Birth : "
              name="DOB"
              onChange={this.handleChange}
            />
            <small style={{ color: "#f86c6b" }}>{this.state.DOBError}</small>

            <SelectComponent
              title="Gender"
              name="Gender"
              disabledOption="Gender"
              options={["Male", "Female", "other"]}
              handleChange={this.handleChange}
            />

            <small style={{ color: "#f86c6b" }}>{this.state.GenderError}</small>

            <SelectComponent
              title="Martial Status"
              name="maritalStatus"
              disabledOption="Status"
              options={["Status 1", "Status 2"]}
              handleChange={this.handleChange}
            />

            <small style={{ color: "#f86c6b" }}>
              {this.state.maritalStatusError}
            </small>

            <FormInput
              type="date"
              labelFor="joiningDate"
              Label="Joining Date : "
              name="JoiningDate"
              onChange={this.handleChange}
            />
            <small style={{ color: "#f86c6b" }}>
              {this.state.JoiningDateError}
            </small>

            <FormInput
              type="text"
              labelFor="designation"
              Label="Designation : "
              onChange={this.handleChange}
              placeHolder="1112 street"
              name="Designation"
            />
            <small style={{ color: "#f86c6b" }}>
              {this.state.DesignationError}
            </small>

            <FormInput
              type="text"
              labelFor="De"
              Label="Department : "
              onChange={this.handleChange}
              placeHolder="1112 street"
              name="Department"
            />

            <small style={{ color: "#f86c6b" }}>
              {this.state.DepartmentError}
            </small>

            <FormInput
              type="number"
              labelFor="De"
              Label="Salary : "
              onChange={this.handleChange}
              placeHolder="Amount"
              name="Salary"
            />
            <small style={{ color: "#f86c6b" }}>{this.state.salaryError}</small>

            <FormInput
              type="number"
              labelFor="De"
              Label="Loan : "
              onChange={this.handleChange}
              placeHolder="Amount"
              name="Loan"
            />
            <small style={{ color: "#f86c6b" }}>{this.state.loanError}</small>

            <FormInput
              type="number"
              labelFor="De"
              Label="Total Loan : "
              onChange={this.handleChange}
              placeHolder="Amount"
              name="totalLoan"
            />
            <small style={{ color: "#f86c6b" }}>
              {this.state.totalloanError}
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

export default AddTeacher;
