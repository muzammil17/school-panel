import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Api } from "../../common/Api";

class ViewCircular extends Component {
  state={
    circular: null,
    id: ''
  }
  componentDidMount(){
    if(this.props.location.state){
      console.log(this.props.location.state.search)
      // var data= JSON.parse(this.props.location.state.search)
      Api('circular/'+this.props.location.state.search, 'get')
      .then(response=>{
        console.log(response.data);
        this.setState({
          circular: response.data.circular,
          id: response.data.circular.id
        })
      })
      .catch(error=>{
        console.log(error.response);
      }) 
    }
    else{
      this.props.history.push('/listCircular')
    }
  }
  render(){
  return (
    <div className="animated fadeIn">
      <div className="card ">
        <div className="card-header">
          <h2 className="float-left">CIRCULAR</h2>
          <span className="float-right mt-2">
            <Link to={{
                pathname: '/editCircular/' + this.state.id, state: {
                search: this.state.id
                }
              }}>Edit</Link>
          </span>
        </div>
        <div className="card-body">
          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Title</span>
            </div>
            <div className="col-sm-8 col-8">
              <span className="float-left ">{this.state.circular ? this.state.circular.title : ''}</span>
            </div>
          </div>
          <hr></hr>

          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Date</span>
            </div>
            <div className="col-sm-8 col-8">
              <span className="float-left ">{this.state.circular ? this.state.circular.circularDate : ''}</span>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Class</span>
            </div>
            <div className="col-sm-8 col-8">
              <span className="float-left ">{this.state.circular ? this.state.circular.class != 'All' ? this.state.circular.classes_std.name : 'All' : ''}</span>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Description</span>
            </div>
            <div className="col-sm-8 col-8">
              <span className="float-left ">{this.state.circular ? this.state.circular.details : ''}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
};

export default ViewCircular;
