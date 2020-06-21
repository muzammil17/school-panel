import React from "react";
import FormInput from "./FormInput";
import SubmitButton from "./submitButton";

const EditResult = (props) => {
  return (
    <div className="animated fadeIn">
      <div className="card">
        <form className="form card-body">
          <FormInput
            Label="Name :"
            forLabel="name"
            type="text"
            placeHolder="Student Name"
            value={props.name}
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
            Label="Year :"
            forLabel="year"
            type="date"
            placeHolder=""
            value={props.year}
          />
          <FormInput
            Label="Subject :"
            forLabel="subject"
            type="text"
            placeHolder="Physics"
            value={props.subject}
          />

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

          <FormInput
            Label="Obtained Marks :"
            forLabel="obMarks"
            type="number"
            value={props.obtainedMarks}
            placeHolder="1000"
          />

          <FormInput
            Label="Total Marks :"
            forLabel="ttMarks"
            type="number"
            placeHolder="1200"
            value={props.totalMarks}
          />

          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default EditResult;
