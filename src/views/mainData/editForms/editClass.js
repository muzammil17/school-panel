import React from "react";
import FormInput from "./FormInput";
import SubmitButton from "./submitButton";

const EditClass = (props) => {
  return (
    <div className="animated fadeIn">
      <div className="card ">
        <form className="form card-body">
          <div className="row">
            <div className="col-sm-12 formInput">
              <div className="form-group">
                <label htmlFor="sel1">Class Teacher :</label>
                <select className="form-control select" id="sel1" value = {props.class}>
                  <option disabled>Select teacher</option>
                  <option>Maham</option>
                  <option>Bisma</option>
                  <option>Farah</option>
                </select>
              </div>
            </div>
          </div>

          <FormInput
            type="text"
            labelFor="subject"
            Label="Subject :"
            placeHolder="enter subject"
            value = {props.subject}
          />

          <div className="row">
            <div className="col-sm-12 formInput">
              <div className="form-group">
                <label htmlFor="sel1">Subject Teacher :</label>
                <select className="form-control select" id="sel1" value = {props.teacher}>
                  <option disabled>Select teacher</option>
                  <option>Maham</option>
                  <option>Bisma</option>
                  <option>Farah</option>
                </select>
              </div>
            </div>
          </div>

          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default EditClass;
