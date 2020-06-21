import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Api } from "../../common/Api";

class ViewDiary extends Component {
  state = {
    data: {},
    loading: true,
  };
  componentDidMount(){
    console.log(this.props.match);
    
    Api('notice/'+this.props.match.params.diaryId, 'get')
      .then(response=>{
        console.log(response.data);
        this.setState({
          data: response.data.notice,
          id: response.data.notice.id,
          loading: false
        })
      })
      .catch(error=>{
        console.log(error.response);
      }) 
  }
  render(){
    const { data, loading } = this.state;
    if (loading) {
      return <p>loading...</p>;
    }
  return (
    <div className="animated fadeIn">
      <div className="card ">
        <div className="card-header">
          <h2 className="float-left">DIARY</h2>
          <span className="float-right mt-2">
            <Link color="primary"  to={{
                pathname: '/editDiary/' + this.state.id, state: {
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
              <span className="float-left ">{data.title}</span>
            </div>
          </div>

          <hr></hr>
          
          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Type</span>
            </div>
            <div className="col-sm-8 col-8">
              <span className="float-left ">{data.type}</span>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Subject</span>
            </div>
            <div className="col-sm-8 col-8">
              <span className="float-left ">{data.subject.name}</span>
            </div>
          </div>

          <hr></hr>
          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Class</span>
            </div>
            <div className="col-sm-8 col-8">
              <span className="float-left ">{data.classes.name}</span>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Description</span>
            </div>
            <div className="col-sm-8 col-8">
              <span className="float-left ">{data.body} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default ViewDiary;
