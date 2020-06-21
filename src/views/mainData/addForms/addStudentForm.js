import React from "react";
import FormInput from "./FormInput";
import SubmitButton from "./submitButton";

const AddStudentForm = () => {
  return (
    <div className="animated fadeIn">
      <div className="card">
        <form className="form card-body">
          <div className="row">
            <div className="col-sm-12">
              <button className="form-button px-3 py-2  btn-primary ml-auto float-right">
                <input type="file" />
              </button>
            </div>
          </div>

          <FormInput
            type="text"
            labelFor="firstName"
            Label="First Name :"
            placeHolder="First Name"
          />

          <FormInput
            type="text"
            labelFor="LastName"
            Label="Last Name :"
            placeHolder="Last Name"
          />

          {/* 
          <FormInput
            type="text"
            labelFor="FatherName"
            Label="Father's Name :"
            placeHolder="Father Name"
          />

          <FormInput
            type="tel"
            labelFor="number"
            Label="Contact No :"
            placeHolder="034512345678"
          />

          <FormInput
            type="text"
            labelFor="address"
            Label="Address : "
            placeHolder="street 4"
          />

          <FormInput
            type="text"
            labelFor="perm_address"
            Label="Permanent Address : "
            placeHolder="Adress..."
          />

          <FormInput
            type="text"
            labelFor="cnic"
            Label="CNIC : "
            placeHolder="42201-12121212-1"
          /> */}
          <div className="row">
            <div className="col-sm-12 formInput">
              <div className="form-group">
                <label htmlFor="sel1">Gender :</label>
                <select className="form-control select" id="sel1">
                  <option disabled>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>

          <FormInput type="date" labelFor="date" Label="Date Of Birth : " />

          <div className="row">
            <div className="col-sm-12 formInput">
              <div className="form-group">
                <label htmlFor="sel1">Class :</label>
                <select className="form-control select" id="sel1">
                  <option disabled>Select Class</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
              </div>
            </div>
          </div>

          <FormInput
            type="main"
            labelFor="main"
            Label="Email : "
            placeHolder="example123@gmail.com"
          />

          <FormInput
            type="date"
            labelFor="joiningDate"
            Label="Joining Date : "
          />

          <FormInput
            type="number"
            labelFor="Ro.no"
            Label="Roll Number : "
            placeHolder="19"
          />

          {/* <FormInput
            type="text"
            labelFor="designation"
            Label="Designation : "
            placeHolder="1112 street"
          />

          <FormInput
            type="text"
            labelFor="De"
            Label="Department : "
            placeHolder="1112 street"
          />

          <FormInput
            type="number"
            labelFor="De"
            Label="Salary : "
            placeHolder="Amount"
          />

          <FormInput
            type="number"
            labelFor="De"
            Label="Loan : "
            placeHolder="Amount"
          /> */}

          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default AddStudentForm;
