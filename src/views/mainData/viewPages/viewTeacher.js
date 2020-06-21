import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Api } from "../../common/Api";
import { serverUrlImage } from "../../utils/Constants";

class ViewTeacher extends Component {
  state = {
    data: {},
    loading: true,
  };

  componentDidMount() {
    if (this.props.location.state) {
      console.log(this.props);
      let id = this.props.location.state.search;
      console.log(id);
      let data = {
        parentId: id,
        type: "parents",
      };
      Api("teacher/" + id, "get")
        .then((res) => {
          console.log(res);
          this.setState({
            data: res.data.Teachers,
            loading: false,
          });
        })
        .catch((err) => console.log(err));
    } else {
      this.props.history.push("/listTeacher");
    }
  }

  render() {
    const { data, loading } = this.state;
    console.log(this.state);
    if (loading) {
      return <h3>loading</h3>;
    }
    return (
      <div className="animated fadeIn">
        <div className="card ">
          <div className="card-header">
            <h2 className="float-left">TEACHER</h2>
            <span className="float-right mt-2">
              <Link
                color="primary"
                to={{
                  pathname: "/editTeacher/" + data.id,
                  state: {
                    search: data,
                  },
                }}
              >
                Edit
              </Link>
            </span>
          </div>

          <div className="card-body">
            {data.TeacherImage !== null && (
              <React.Fragment>
                <div className="row">
                  <div className=" col-6 col-sm-3 ">
                    <img
                      src={serverUrlImage + data.TeacherImage}
                      style={{ height: 150 }}
                    />
                  </div>
                  {/* <div className="col-sm-4 col-8">
                    <span className="float-left ">abc.png</span>
                  </div> */}
                </div>
                <hr></hr>
              </React.Fragment>
            )}

            <div className="row">
              <div className=" col-6 col-sm-3 ">
                <span className="bold">First Name</span>
              </div>
              <div className="col-sm-4 col-8">
                <span className="float-left ">{data.FirstName}</span>
              </div>
            </div>

            <hr></hr>

            <div className="row">
              <div className=" col-6 col-sm-3 ">
                <span className="bold">Last Name</span>
              </div>
              <div className="col-sm-4 col-8">
                <span className="float-left ">{data.LastName}</span>
              </div>
            </div>

            <hr></hr>

            <div className="row">
              <div className=" col-6 col-sm-3 ">
                <span className="bold">father Name</span>
              </div>
              <div className="col-sm-4 col-8">
                <span className="float-left ">{data.FatherName}</span>
              </div>
            </div>

            <hr></hr>

            <div className="row">
              <div className=" col-6 col-sm-3 ">
                <span className="bold">Contact No</span>
              </div>
              <div className="col-sm-4 col-8">
                <span className="float-left ">{data.ContactNo}</span>
              </div>
            </div>

            <hr></hr>

            <div className="row">
              <div className=" col-6 col-sm-3 ">
                <span className="bold">Address</span>
              </div>
              <div className="col-sm-4 col-8">
                <span className="float-left ">{data.Address}</span>
              </div>
            </div>

            <hr></hr>

            <div className="row">
              <div className=" col-6 col-sm-3 ">
                <span className="bold">Permanent Address</span>
              </div>
              <div className="col-sm-4 col-8">
                <span className="float-left ">{data.PermanentAddress}</span>
              </div>
            </div>

            <hr></hr>

            <div className="row">
              <div className=" col-6 col-sm-3 ">
                <span className="bold">Cnic</span>
              </div>
              <div className="col-sm-4 col-8">
                <span className="float-left ">{data.CNIC}</span>
              </div>
            </div>

            <hr></hr>

            <div className="row">
              <div className=" col-6 col-sm-3 ">
                <span className="bold">Email</span>
              </div>
              <div className="col-sm-4 col-8">
                <span className="float-left ">{data.Email}</span>
              </div>
            </div>

            <hr></hr>

            <div className="row">
              <div className=" col-6 col-sm-3 ">
                <span className="bold">Date Of Birth</span>
              </div>
              <div className="col-sm-4 col-8">
                <span className="float-left ">{data.DOB}</span>
              </div>
            </div>

            <hr></hr>

            <div className="row">
              <div className=" col-6 col-sm-3 ">
                <span className="bold">Joining Date</span>
              </div>
              <div className="col-sm-4 col-8">
                <span className="float-left ">{data.JoiningDate}</span>
              </div>
            </div>

            <hr></hr>

            <div className="row">
              <div className=" col-6 col-sm-3 ">
                <span className="bold">Gender</span>
              </div>
              <div className="col-sm-4 col-8">
                <span className="float-left ">{data.Gender}</span>
              </div>
            </div>

            <hr></hr>

            <div className="row">
              <div className=" col-6 col-sm-3 ">
                <span className="bold">Department</span>
              </div>
              <div className="col-sm-4 col-8">
                <span className="float-left ">{data.Department}</span>
              </div>
            </div>

            <hr></hr>

            <div className="row">
              <div className=" col-6 col-sm-3 ">
                <span className="bold">Designation</span>
              </div>
              <div className="col-sm-4 col-8">
                <span className="float-left ">{data.Designation}</span>
              </div>
            </div>

            <hr></hr>

            <div className="row">
              <div className=" col-6 col-sm-3 ">
                <span className="bold">marital Status</span>
              </div>
              <div className="col-sm-4 col-8">
                <span className="float-left ">{data.maritalStatus}</span>
              </div>
            </div>

            <hr></hr>

            <div className="row">
              <div className=" col-6 col-sm-3 ">
                <span className="bold">Loan</span>
              </div>
              <div className="col-sm-4 col-8">
                <span className="float-left ">{data.loan}</span>
              </div>
            </div>

            <hr></hr>

            <div className="row">
              <div className=" col-6 col-sm-3 ">
                <span className="bold">Salary</span>
              </div>
              <div className="col-sm-4 col-8">
                <span className="float-left ">{data.salary}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ViewTeacher;
