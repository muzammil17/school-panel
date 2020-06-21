import React from "react";
import { Link } from "react-router-dom";

const ViewEmployee = () => {
  return (
    <div className="animated fadeIn">
      <div className="card ">
        <div className="card-header">
          <h2 className="float-left">Employee</h2>
          <span className="float-right mt-2">
            <Link color="primary" to='editEmployee'>edit</Link>
          </span>
        </div>
        <div className="card-body">
          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Image</span>
            </div>
            <div className="col-sm-4 col-8">
              <span className="float-left ">abc.png</span>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Name</span>
            </div>
            <div className="col-sm-4 col-8">
              <span className="float-left ">Ibrahim</span>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Contact No</span>
            </div>
            <div className="col-sm-4 col-8">
              <span className="float-left ">03451234567</span>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Address</span>
            </div>
            <div className="col-sm-4 col-8">
              <span className="float-left ">A1/87 block 13</span>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Cnic</span>
            </div>
            <div className="col-sm-4 col-8">
              <span className="float-left ">42201-1234567-9</span>
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
              <span className="bold">Education</span>
            </div>
            <div className="col-sm-4 col-8">
              <span className="float-left ">Bachelor's in Science</span>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Occupation</span>
            </div>
            <div className="col-sm-4 col-8">
              <span className="float-left ">Buisness</span>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Salary</span>
            </div>
            <div className="col-sm-4 col-8">
              <span className="float-left ">55000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployee;
