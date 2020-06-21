import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Api } from "../../common/Api";
import { serverUrlImage } from "../../utils/Constants";

class ViewParent extends Component {
  state = {
    data: {},
    loading: true,
  };

  componentDidMount() {

    if( this.props.location.state){

      let id = this.props.match.params.parentId;
      console.log(id);
    let data = {
      parentId: id,
      type: "parents",
    };
    Api("parents/" + id, "get")
      .then((res) => {
        console.log(res);
        this.setState({
          data: res.data.parents,
          loading: false,
        });
      })
      .catch((err) => console.log(err));
    }
    else{
      this.props.history.push('/listParent')
    }

  }

  render() {
    const { data, loading } = this.state;
    if (loading) {
      return <h3>loading</h3>;
    }
    console.log(this.props)
    return (
      <div className="animated fadeIn">
        <div className="card ">
          <div className="card-header">
            <h2 className="float-left">PARENT</h2>
            <span className="float-right mt-2">
              <Link color="primary" to={{
                pathname: "/editParent/" + data.id,
                state: {
                  search: data,
                },
              }}>
                Edit
              </Link>
            </span>
          </div>

          <div className="card-body">
            {data.FImage !== null && (
              <React.Fragment>
                <div className="row">
                  <div className=" col-6 col-sm-3 ">
                    <img src={serverUrlImage + data.FImage} style={{height: 150}} />
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
                <span className="float-left ">{data.FCNIC}</span>
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
                <span className="bold">Occupation</span>
              </div>
              <div className="col-sm-4 col-8">
                <span className="float-left ">{data.FOccupation}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ViewParent;
