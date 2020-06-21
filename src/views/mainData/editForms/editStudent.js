import React from "react";
import FormInput from "./FormInput";
import SubmitButton from "./submitButton";

const EditStudent = (props) => {
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
            value={props.firstName}
          />

          <FormInput
            type="text"
            labelFor="LastName"
            Label="Last Name :"
            placeHolder="Last Name"
            value={props.lastName}
          />

          <div className="row">
            <div className="col-sm-12 formInput">
              <div className="form-group">
                <label htmlFor="sel1">Gender :</label>
                <select
                  className="form-control select"
                  id="sel1"
                  value={props.gender}
                >
                  <option disabled>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>

          <FormInput
            type="date"
            labelFor="date"
            Label="Date Of Birth : "
            value={props.dateOfBirth}
          />

          <div className="row">
            <div className="col-sm-12 formInput">
              <div className="form-group">
                <label htmlFor="sel1">Class :</label>
                <select
                  className="form-control select"
                  id="sel1"
                  value={props.class}
                >
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
            value={props.email}
          />

          <FormInput
            type="date"
            labelFor="joiningDate"
            Label="Joining Date : "
            value={props.joiningDate}
          />

          <FormInput
            type="number"
            labelFor="Ro.no"
            Label="Roll Number : "
            placeHolder="19"
            value={props.rollNo}
          />

          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default EditStudent;
