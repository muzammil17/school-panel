import React from "react";
import FormInput from "./FormInput";
import SubmitButton from "./submitButton";

const EditEmployee = (props) => {
  return (
    <div className="animated fadeIn">
      <div className="card">
        <form className="form card-body">
          <div className="row">
            <div className="col-sm-12">
              <button className="form-button px-3 py-2  btn-primary  float-right">
                Import Excel File
              </button>
            </div>
          </div>

          <FormInput
            type="text"
            labelFor="firstName"
            Label="First Name :"
            placeHolder="First Name"
            value = {props.firstName}
          />

          <FormInput
            type="text"
            labelFor="LastName"
            Label="Last Name :"
            placeHolder="Last Name"
            value = {props.lastName}
          />

          <FormInput
            type="text"
            labelFor="FatherName"
            Label="Father's Name :"
            placeHolder="Father Name"
            value = {props.FatherName}
          />

          <FormInput
            type="tel"
            labelFor="number"
            Label="Contact No :"
            placeHolder="034512345678"
            value = {props.contactNumber}
          />

          <FormInput
            type="text"
            labelFor="address"
            Label="Address : "
            placeHolder="street 4"
            value = {props.address}
          />

          <FormInput
            type="text"
            labelFor="perm_address"
            Label="Permanent Address : "
            placeHolder="Adress..."
            value = {props.permanentAddress}
          />

          <FormInput
            type="text"
            labelFor="cnic"
            Label="CNIC : "
            placeHolder="42201-12121212-1"
            value = {props.cnic}
          />

          <FormInput type="date" labelFor="date" Label="Date Of Birth : " value = {props.dateOfBirth} />

          <div className="row">
            <div className="col-sm-12 formInput">
              <div className="form-group">
                <label htmlFor="sel1" className="semi-bold">
                  Gender :
                </label>
                <select className="form-control select" id="sel1" value = {props.gender}>
                  <option disabled>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 formInput">
              <div className="form-group">
                <label htmlFor="sel1" className="semi-bold">
                  Martial Status :
                </label>
                <select className="form-control select" id="sel1" value = {props.status}>
                  <option disabled>Status</option>
                  <option>Status 2</option>
                  <option>Status 1</option>
                  <option>Status 3</option>
                </select>
              </div>
            </div>
          </div>

          <FormInput
            type="main"
            labelFor="main"
            Label="Email : "
            placeHolder="example123@gmail.com"
            value = {props.email}
          />

          <FormInput
            type="date"
            labelFor="joiningDate"
            Label="Joining Date : "
            value = {props.joiningDate}
          />

          <FormInput
            type="text"
            labelFor="designation"
            Label="Designation : "
            placeHolder="1112 street"
            value = {props.designation}
          />

          <FormInput
            type="text"
            labelFor="De"
            Label="Department : "
            placeHolder="1112 street"
            value = {props.department}
          />

          <FormInput
            type="number"
            labelFor="De"
            Label="Salary : "
            placeHolder="Amount"
            value = {props.salary}
          />

          <FormInput
            type="number"
            labelFor="De"
            Label="Loan : "
            placeHolder="Amount"
            value = {props.loan}
          />

          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
