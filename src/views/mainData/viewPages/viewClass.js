import React from "react";
import { Link } from "react-router-dom";

const ViewClass = () => {
  return (
    <div className="animated fadeIn">
      <div className="card ">
        <div className="card-header">
          <h2 className="float-left">Class</h2>
          <span className="float-right mt-2">
            <Link to='editClass'>edit</Link>
          </span>
        </div>
        <div className="card-body">
          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Class Teacher</span>
            </div>
            <div className="col-sm-8 col-8">
              <span className="float-left ">Bisma Tahir</span>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Subject</span>
            </div>
            <div className="col-sm-8 col-8">
              <span className="float-left ">Chemistry</span>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Subject Teacher</span>
            </div>
            <div className="col-sm-8 col-8">
              <span className="float-left ">Maham</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewClass;
