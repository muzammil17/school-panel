import React from "react";
import FormInput from "./FormInput";
import SubmitButton from "./submitButton";
import SelectComponent from "../selectComponent";

const AddSyllabus = () => {
  return (
    <div className="animated fadeIn">
      <div className="card ">
        <form className="form card-body">
          <FormInput type="date" labelFor="date" Label="Year : " />

          <FormInput
            type="text"
            labelFor="subject"
            Label="Subject :"
            placeHolder="enter subject"
          />

          <SelectComponent
            title="Class"
            name="classes"
            disabledOption="Select Class"
            options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            //  handleChange={this.handleChange}
          />

          <SelectComponent
            title="Term"
            name="term"
            disabledOption="Select Term"
            options={["First Term", "Second Term", "Third Term"]}
            // handleChange={this.handleChange}
          />

          <div className="row">
            <div className="col-sm-12 formInput" cols="">
              <label htmlFor="description">Details :</label>
              <textarea
                placeholder="Syllabus Detail..."
                className="p-3"
                rows="5"
              ></textarea>
            </div>
          </div>

          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default AddSyllabus;
