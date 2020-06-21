// import React from "react";
// import FormInput from "./FormInput";
// import SubmitButton from "./submitButton";

// const EditTeacher = (props) => {
//   console.log(props)
//   return (
//     <div className="animated fadeIn">
//       <div className="card">
//         <form className="form card-body">
//           <div className="row">
//             <div className="col-sm-12">
//               <button className="form-button px-3 py-2  btn-primary  float-right">
//                 Import Excel File
//               </button>
//             </div>
//           </div>

//           <FormInput
//             type="text"
//             labelFor="firstName"
//             Label="First Name :"
//             placeHolder="First Name"
//             value = {props.firstName}
//           />

//           <FormInput
//             type="text"
//             labelFor="LastName"
//             Label="Last Name :"
//             placeHolder="Last Name"
//             value = {props.lastName}
//           />

//           <FormInput
//             type="text"
//             labelFor="FatherName"
//             Label="Father's Name :"
//             placeHolder="Father Name"
//             value = {props.FatherName}
//           />

//           <FormInput
//             type="tel"
//             labelFor="number"
//             Label="Contact No :"
//             placeHolder="034512345678"
//             value = {props.contactNumber}
//           />

//           <FormInput
//             type="text"
//             labelFor="address"
//             Label="Address : "
//             placeHolder="street 4"
//             value = {props.address}
//           />

//           <FormInput
//             type="text"
//             labelFor="perm_address"
//             Label="Permanent Address : "
//             placeHolder="Adress..."
//             value = {props.permanentAddress}
//           />

//           <FormInput
//             type="text"
//             labelFor="cnic"
//             Label="CNIC : "
//             placeHolder="42201-12121212-1"
//             value = {props.cnic}
//           />

//           <FormInput type="date" labelFor="date" Label="Date Of Birth : " value = {props.dateOfBirth} />

//           <div className="row">
//             <div className="col-sm-12 formInput">
//               <div className="form-group">
//                 <label htmlFor="sel1" className="semi-bold">
//                   Gender :
//                 </label>
//                 <select className="form-control select" id="sel1" value = {props.gender}>
//                   <option disabled>Gender</option>
//                   <option>Male</option>
//                   <option>Female</option>
//                   <option>Other</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           <div className="row">
//             <div className="col-sm-12 formInput">
//               <div className="form-group">
//                 <label htmlFor="sel1" className="semi-bold">
//                   Martial Status :
//                 </label>
//                 <select className="form-control select" id="sel1" value = {props.status}>
//                   <option disabled>Status</option>
//                   <option>Status 2</option>
//                   <option>Status 1</option>
//                   <option>Status 3</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           <FormInput
//             type="main"
//             labelFor="main"
//             Label="Email : "
//             placeHolder="example123@gmail.com"
//             value = {props.email}
//           />

//           <FormInput
//             type="date"
//             labelFor="joiningDate"
//             Label="Joining Date : "
//             value = {props.joiningDate}
//           />

//           <FormInput
//             type="text"
//             labelFor="designation"
//             Label="Designation : "
//             placeHolder="1112 street"
//             value = {props.designation}
//           />

//           <FormInput
//             type="text"
//             labelFor="De"
//             Label="Department : "
//             placeHolder="1112 street"
//             value = {props.department}
//           />

//           <FormInput
//             type="number"
//             labelFor="De"
//             Label="Salary : "
//             placeHolder="Amount"
//             value = {props.salary}
//           />

//           <FormInput
//             type="number"
//             labelFor="De"
//             Label="Loan : "
//             placeHolder="Amount"
//             value = {props.loan}
//           />

//           <SubmitButton />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditTeacher;

import React, { Component } from "react";
import FormInput from "./FormInput";
import SubmitButton from "./submitButton";
import LoadingButton from "../addForms/loadingButton";
import { Api } from "../../common/Api";
import { Alert } from "reactstrap";
import { serverUrlImage } from "../../utils/Constants";

class EditTeacher extends Component {
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

  componentDidMount() {
    if (this.props.location.state) {
      let id = this.props.location.state.search;

      Api("teacher/" + id, "get")
        .then((res) => {
          console.log(res);
          this.setState({
            teacherData: res.data.Teachers,
            FirstName: res.data.Teachers.FirstName,
            LastName: res.data.Teachers.LastName,
            FatherName: res.data.Teachers.FatherName,
            ContactNo: res.data.Teachers.ContactNo,
            Address: res.data.Teachers.Address,
            PermanentAddress: res.data.Teachers.PermanentAddress,
            CNIC: res.data.Teachers.CNIC,
            Email: res.data.Teachers.Email,
            DOB: res.data.Teachers.DOB,
            JoiningDate: res.data.Teachers.JoiningDate,
            Salary: res.data.Teachers.salary,
            Department: res.data.Teachers.Department,
            Designation: res.data.Teachers.Designation,
            Gender: res.data.Teachers.Gender,
            maritalStatus: res.data.Teachers.maritalStatus,
            loan: res.data.Teachers.loan,
            totalLoan: res.data.Teachers.totalLoan,
            loading: false,
          });
          if (res.data.Teachers.TeacherImage) {
            this.setState({
              TeacherImage: res.data.Teachers.TeacherImage,
            });
          }
        })
        .catch((err) => console.log(err));
    } else {
      this.props.history.push("/listTeacher");
    }
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
      TeacherImage: e.target.files[0],
    });
  };
  // submitButton = (e) => {
  //   e.preventDefault();
  //   console.log("hello");

  // var validation = true;
  // if (this.state.FatherName === "") {
  //   this.setState({
  //     FatherNameError: "* Father name is required",
  //   });
  //   validation = false;
  // }
  // if (this.state.FirstName === "") {
  //   this.setState({
  //     FirstNameError: "* First name is required",
  //   });
  //   validation = false;
  // }
  // if (this.state.LastName === "") {
  //   this.setState({
  //     LastNameError: "* Last name is required",
  //   });
  //   validation = false;
  // }

  // if (this.state.ContactNo === "") {
  //   this.setState({
  //     ContactNoError: "* Contact number is required",
  //   });
  //   validation = false;
  // }

  // if (this.state.Address === "") {
  //   this.setState({
  //     AddressError: "* Address is required",
  //   });
  //   validation = false;
  // }

  // if (this.state.PermanentAddress === "") {
  //   this.setState({
  //     PermanentAddressError: "* Permanent Address is required",
  //   });
  //   validation = false;
  // }

  // if (this.state.Email === "") {
  //   this.setState({
  //     EmailError: "* Email is required",
  //   });
  //   validation = false;
  // }

  // if (this.state.CNIC === "") {
  //   this.setState({
  //     CNICError: "* CNIC is required",
  //   });
  //   validation = false;
  // }

  // if (this.state.DOB === "") {
  //   this.setState({
  //     DOBError: "* date of birth is required",
  //   });
  //   validation = false;
  // }
  // if (this.state.Gender === "") {
  //   this.setState({
  //     GenderError: "* Gender is required",
  //   });
  //   validation = false;
  // }
  // if (this.state.maritalStatus === "") {
  //   this.setState({
  //     maritalStatusError: "* martial Status is required",
  //   });
  //   validation = false;
  // }
  // if (this.state.JoiningDate === "") {
  //   this.setState({
  //     JoiningDateError: "* Joining date is required",
  //   });
  //   validation = false;
  // }
  // if (this.state.Designation === "") {
  //   this.setState({
  //     DesignationError: "* Designation is required",
  //   });
  //   validation = false;
  // }
  // if (this.state.Department === "") {
  //   this.setState({
  //     DepartmentError: "* date of birth is required",
  //   });
  //   validation = false;
  // }
  // if (this.state.salary === "") {
  //   this.setState({
  //     salaryError: "* date of birth is required",
  //   });
  //   validation = false;
  // }
  // if (this.state.Loan === "") {
  //   this.setState({
  //     LoanError: "* Loan Amount is required",
  //   });
  //   validation = false;
  // }
  // if (this.state.totalLoan === "") {
  //   this.setState({
  //     totalLoanError: "* Loan Amount is required",
  //   });
  //   validation = false;
  // }

  // console.log(validation);
  // if (validation) {
  //   let data = new FormData();
  //   data.append("FirstName", this.state.FirstName);
  //   data.append("LastName", this.state.LastName);
  //   data.append("FatherName", this.state.FatherName);
  //   data.append("Address", this.state.Address);
  //   data.append("ContactNo", this.state.ContactNo);
  //   data.append("PermanentAddress", this.state.PermanentAddress);
  //   data.append("Email", this.state.Email);
  //   data.append("CNIC", this.state.CNIC);
  //   data.append("DOB", this.state.DOB);
  //   data.append("Gender", this.state.Gender);
  //   data.append("maritalStatus", this.state.maritalStatus);
  //   data.append("JoiningDate", this.state.JoiningDate);
  //   data.append("Designation", this.state.Designation);
  //   data.append("Department", this.state.Department);
  //   data.append("Salary", this.state.Salary);
  //   data.append("loan", this.state.Loan);
  //   data.append("totalLoan", this.state.totalLoan);
  //   if (
  //     this.state.TeacherImage !== null &&
  //     this.state.TeacherImage !== undefined
  //   ) {
  //     data.append("TeacherImage", this.state.TeacherImage);
  //   }

  //     console.log(data);
  //     this.setState({
  //       loading: true,
  //     });

  //     for (var value of data.values()) {
  //       console.log(value);
  //     }

  //     let id = this.props.location.state.search;
  //     Api("teacher/" + id, "post", data)
  //       .then((res) => {
  //         console.log(res);
  //         if (res.data.status !== "fail") {
  //           this.setState({
  //             loading: false,
  //             success: true,
  //           });
  //         } else {
  //           let errorMessages = res.data.message;
  //           Object.keys(errorMessages).map((msgKey) => {
  //             this.setState({
  //               [`${msgKey}Error`]: errorMessages[msgKey],
  //               loading: false,
  //             });
  //           });
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         this.setState({
  //           loading: false,
  //         });
  //         if (err.response) {
  //           console.log(err.response.data);
  //           this.setState({
  //             errorText: err.response.data.message,
  //           });
  //         } else {
  //           this.setState({
  //             errorText: "* Network error",
  //           });
  //         }
  //       });
  //   }
  // };

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
      data.append("loan", this.state.loan);
      data.append("totalLoan", this.state.totalLoan);
      if (
        this.state.TeacherImage !== null &&
        this.state.TeacherImage !== undefined
      ) {
        data.append("TeacherImage", this.state.TeacherImage);
      }

      this.setState({
        loading: true,
      });
      let id = this.props.location.state.search;

      for (var value of data.values()) {
        console.log(value);
      }

      Api(`teacher/${id}`, "post", data)
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
    // console.log(this.state.teacherData);
    const { teacherData } = this.state;
    if (teacherData === null) return <h2>Loading</h2>;

    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="form card-body">
            <div className="row">
              <div className=" col-md-6 col-sm-12">
                <div className="form-group">
                  <label htmlFor="exampleFormControlFile1">
                    Change Image :{" "}
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="exampleFormControlFile1"
                    name="TeacherImage"
                    onChange={this.handleImage}
                    defaultValue={this.state.TeacherImage}
                  />
                </div>
              </div>
            </div>

            {this.state.TeacherImage !== null && (
              <React.Fragment>
                <div className="row">
                  <div className=" col-6 col-sm-3 ">
                    <img
                      src={serverUrlImage + this.state.TeacherImage}
                      style={{ height: 150 }}
                    />
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
              labelFor="firstName"
              Label="First Name :"
              onChange={this.handleChange}
              placeHolder="First Name"
              name="FirstName"
              value={this.state.FirstName}
            />

            <FormInput
              type="text"
              labelFor="LastName"
              Label="Last Name :"
              onChange={this.handleChange}
              placeHolder="Last Name"
              name="LastName"
              value={this.state.LastName}
            />

            <FormInput
              type="text"
              labelFor="FatherName"
              Label="Father's Name :"
              onChange={this.handleChange}
              placeHolder="Father Name"
              name="FatherName"
              value={this.state.FatherName}
            />

            <FormInput
              type="tel"
              labelFor="number"
              Label="Contact No :"
              onChange={this.handleChange}
              onChange={this.handleChange}
              placeHolder="034512345678"
              name="ContactNo"
              value={this.state.ContactNo}
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
              value={this.state.Address}
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
              value={this.state.PermanentAddress}
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
              value={this.state.CNIC}
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
              value={this.state.Email}
            />
            <small style={{ color: "#f86c6b" }}>{this.state.EmailError}</small>

            <FormInput
              type="date"
              labelFor="date"
              Label="Date Of Birth : "
              name="DOB"
              onChange={this.handleChange}
              value={this.state.DOB}
            />
            <small style={{ color: "#f86c6b" }}>{this.state.DOBError}</small>

            <div className="row">
              <div className="col-sm-12 formInput">
                <div className="form-group">
                  <label htmlFor="sel1" className="semi-bold">
                    Gender :
                  </label>
                  <select
                    className="form-control select"
                    id="sel1"
                    name="Gender"
                    onChange={this.handleChange}
                    defaultValue={this.state.Gender}
                  >
                    <option disabled>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>

            <small style={{ color: "#f86c6b" }}>{this.state.GenderError}</small>

            <div className="row">
              <div className="col-sm-12 formInput">
                <div className="form-group">
                  <label htmlFor="sel1" className="semi-bold">
                    Martial Status :
                  </label>
                  <select
                    className="form-control select"
                    id="sel1"
                    name="maritalStatus"
                    onChange={this.handleChange}
                    defaultValue={this.state.maritalStatus}
                  >
                    <option disabled>Status</option>
                    <option>Status 2</option>
                    <option>Status 1</option>
                    <option>Status 3</option>
                  </select>
                </div>
              </div>
            </div>

            <small style={{ color: "#f86c6b" }}>
              {this.state.maritalStatusError}
            </small>

            <FormInput
              type="date"
              labelFor="joiningDate"
              Label="Joining Date : "
              name="JoiningDate"
              onChange={this.handleChange}
              value={this.state.JoiningDate}
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
              value={this.state.Designation}
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
              value={this.state.Department}
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
              value={this.state.Salary}
            />
            <small style={{ color: "#f86c6b" }}>{this.state.salaryError}</small>

            <FormInput
              type="number"
              labelFor="De"
              Label="Loan : "
              onChange={this.handleChange}
              placeHolder="Amount"
              name="loan"
              value={this.state.loan}
            />
            <small style={{ color: "#f86c6b" }}>{this.state.loanError}</small>

            <FormInput
              type="number"
              labelFor="De"
              Label="Total Loan : "
              onChange={this.handleChange}
              placeHolder="Amount"
              name="totalLoan"
              value={this.state.totalLoan}
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
              <SubmitButton onClick={this.submitButton} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default EditTeacher;
