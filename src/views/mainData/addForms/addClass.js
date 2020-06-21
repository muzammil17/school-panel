import React from "react";
import FormInput from "./FormInput";
import SubmitButton from "./submitButton";
import SelectComponent from "../selectComponent";

const AddClass = () => {
  return (
    <div className="animated fadeIn">
      <div className="card ">
        <form className="form card-body">
          <SelectComponent
            title="Class Teacher"
            name="class_teacher"
            disabledOption="Select Teacher"
            options={["maham", "bisma", "Farah"]}
            //  handleChange={this.handleChange}
          />

          <FormInput
            type="text"
            labelFor="subject"
            Label="Subject :"
            placeHolder="enter subject"
          />

          <SelectComponent
            title="Subject Teacher"
            name="subject"
            disabledOption="Select Teacher"
            options={["maham", "bisma", "Farah"]}
            //  handleChange={this.handleChange}
          />

          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default AddClass;
