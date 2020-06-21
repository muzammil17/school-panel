import React from "react";
import { Link } from "react-router-dom";

const ViewSyllabus = () => {
  return (
    <div className="animated fadeIn">
      <div className="card ">
        <div className="card-header">
          <h2 className="float-left">Syllabus</h2>
          <span className="float-right mt-2">
            <Link color="primary" to='editSyllabus'>edit</Link>
          </span>
        </div>
        <div className="card-body">
          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Year</span>
            </div>
            <div className="col-sm-8 col-8">
              <span className="float-left ">2020</span>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Class</span>
            </div>
            <div className="col-sm-8 col-8">
              <span className="float-left ">3</span>
            </div>
          </div>

          <hr></hr>


          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Subject</span>
            </div>
            <div className="col-sm-8 col-8">
              <span className="float-left ">Physics</span>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Term</span>
            </div>
            <div className="col-sm-8 col-8">
              <span className="float-left ">
                1<sup>st</sup>
              </span>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Details</span>
            </div>
            <div className="col-sm-8 col-8">
              <span className="float-left ">Details...</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ViewSyllabus;
