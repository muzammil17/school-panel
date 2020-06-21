import React, { Component } from "react";
//import FormInput from "./FormInput";
import SubmitButton from "./submitButton";
import { Link } from "react-router-dom";

class AddStudent extends Component {
  state = {
    parent: "existing",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = (e) => {
    this.setState({
      parent: e.target.value,
    });
  };
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card ">
          <form className="form card-body" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-sm-12 formInput">
                <div className="form-group">
                  <label htmlFor="sel1">Select Parent :</label>
                  <select
                    className="form-control select"
                    id="sel1"
                    onChange={this.handleChange}
                  >
                    <option disabled>Add Student</option>
                    <option value="existing">student of existing parent</option>
                    <option value="new">Student of new parent</option>
                  </select>
                </div>
              </div>
            </div>
            {/* <div className="submitButton">
              <button className="btn-primary px-5 py-3 ml-2">
                {this.state.parent && (
                  this.state.parent === "existing" ? (
                    <Link to="/addDiary">Submit</Link>
                  ) : (
                    <Link to="/addNews">Submit</Link>
                  )
                )}
              </button> */}
            <div className="submitButton">
              {this.state.parent &&
                (this.state.parent === "existing" ? (
                  <Link to="/addStudentForm">
                    <button className="btn-primary px-5 py-3 ml-2" type="submit">
                      Submit
                    </button>
                  </Link>
                ) : (
                  <Link to="/addParent">
                    <button className="btn-primary px-5 py-3 ml-2" type="submit">
                      Submit
                    </button>
                  </Link>
                ))}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddStudent;
