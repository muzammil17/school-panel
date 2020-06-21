import React from "react";
import { Link } from "react-router-dom";

const ViewStudent = () => {
  return (
    <div className="animated fadeIn">
      <div className="card ">
        <div className="card-header">
          <h2 className="float-left">STUDENT</h2>
          <span className="float-right mt-2">
            <Link color="primary" to='editStudent'>edit</Link>
          </span>
        </div>
        <div className="card-body">
          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">First Name</span>
            </div>
            <div className="col-sm-4 col-8">
              <span className="float-left ">Hamza</span>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Last Name</span>
            </div>
            <div className="col-sm-4 col-8">
              <span className="float-left ">Ibrahim</span>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Date Of Birth</span>
            </div>
            <div className="col-sm-4 col-8">
              <span className="float-left ">24-10-2000</span>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Gender</span>
            </div>
            <div className="col-sm-4 col-8">
              <span className="float-left ">Male</span>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Joining Date</span>
            </div>
            <div className="col-sm-4 col-8">
              <span className="float-left ">24-10-2010</span>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Class</span>
            </div>
            <div className="col-sm-4 col-8">
              <span className="float-left ">8</span>
            </div>
          </div>
          <hr></hr>

          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Email</span>
            </div>
            <div className="col-sm-4 col-8">
              <span className="float-left ">user@email.com</span>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Roll No</span>
            </div>
            <div className="col-sm-4 col-8">
              <span className="float-left ">14</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewStudent;
