import React from "react";
import FormInput from "./FormInput";
import SubmitButton from "./submitButton";

const AddSubject = () => {
  return (
    <div className="animated fadeIn">
      <div className="card ">
        <form className="form card-body">
          <FormInput
            type="text"
            labelFor="subject"
            Label="Subject :"
            placeHolder="enter subject"
          />

          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default AddSubject;
