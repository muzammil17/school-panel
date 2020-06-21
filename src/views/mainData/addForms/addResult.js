import React from "react";
import FormInput from "./FormInput";
import SubmitButton from "./submitButton";
import SelectComponent from "../selectComponent";

const AddResult = () => {
  return (
    <div className="animated fadeIn">
      <div className="card">
        <form className="form card-body">
          <FormInput
            Label="Name :"
            forLabel="name"
            type="text"
            placeHolder="Student Name"
          />
          <SelectComponent
            title="Class"
            name="classes"
            disabledOption="Select Class"
            options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            //  handleChange={this.handleChange}
          />
          <FormInput
            Label="Year :"
            forLabel="year"
            type="date"
            placeHolder=""
          />
          <FormInput
            Label="Subject :"
            forLabel="subject"
            type="text"
            placeHolder="Physics"
          />

          <SelectComponent
            title="Term"
            name="term"
            disabledOption="Select Term"
            options={["First Term", "Second Term", "Third Term"]}
            // handleChange={this.handleChange}
          />

          <FormInput
            Label="Obtained Marks :"
            forLabel="obMarks"
            type="number"
            placeHolder="1000"
          />

          <FormInput
            Label="Total Marks :"
            forLabel="ttMarks"
            type="number"
            placeHolder="1200"
          />

          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default AddResult;
