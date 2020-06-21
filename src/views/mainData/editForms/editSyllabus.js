import React from "react";
import FormInput from "./FormInput";
import SubmitButton from "./submitButton";

const EditSyllabus = (props) => {
  return (
    <div className="animated fadeIn">
      <div className="card ">
        <form className="form card-body">
          <FormInput type="date" labelFor="date" Label="Year : " value={props.year} />

          <FormInput
            type="text"
            labelFor="subject"
            Label="Subject :"
            placeHolder="enter subject"
            value={props.subject}
          />

          <div className="row">
            <div className="col-sm-12 formInput">
              <div className="form-group">
                <label htmlFor="sel1">Class :</label>
                <select className="form-control select" id="sel1" value={props.class}>
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

          <div className="row">
            <div className="col-sm-12 formInput">
              <div className="form-group">
                <label htmlFor="sel1">Term :</label>
                <select className="form-control select" id="sel1" value={props.term}>
                  <option disabled>Select Term</option>
                  <option>First</option>
                  <option>Mid</option>
                  <option>Final</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 formInput" cols="">
              <label htmlFor="description">Details :</label>
              <textarea
                placeholder="Syllabus Detail..."
                className="p-3"
                rows="5"
                value={props.description}
              ></textarea>
            </div>
          </div>

          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default EditSyllabus;
