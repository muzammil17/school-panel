import React from "react";
import FormInput from "./FormInput";
import SubmitButton from "./submitButton";
import SelectComponent from "../selectComponent";

const AddEmployee = () => {
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
          />

          <FormInput
            type="text"
            labelFor="LastName"
            Label="Last Name :"
            placeHolder="Last Name"
          />

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
          />

          <FormInput type="date" labelFor="date" Label="Date Of Birth : " />

          <SelectComponent
            title="Gender"
            name="Gender"
            disabledOption="Gender"
            options={["Male", "Female", "other"]}
            //handleChange={this.handleChange}
          />


          <SelectComponent
            title="Martial Status"
            name="maritalStatus"
            disabledOption="Status"
            options={["Status 1", "Status 2"]}
            //handleChange={this.handleChange}
          />


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
          />

          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
