import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Api } from "../../common/Api";
import { serverUrlImage } from "../../utils/Constants";

class ViewEvent extends Component {
  state={
    data: {},
    loading: true
  }
  componentDidMount(){
      // var data= JSON.parse(this.props.location.state.search)
      Api('event/'+this.props.match.params.eventId, 'get')
      .then(response=>{
        console.log(response.data);
        this.setState({
          data: response.data.event,
          id: response.data.event.id,
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
          <h2 className="float-left">EVENT</h2>
          <span className="float-right mt-2">
            <Link color="primary" to={{
                pathname: '/editEvent/' + this.state.id, state: {
                search: this.state.id
                }
            }}>Edit</Link>
          </span>
        </div>
        <div className="card-body">
          {data.thumbnail  && (
              <React.Fragment>
                <div className="row">
                  <div className=" col-6 col-sm-3 ">
                    <img src={serverUrlImage + data.thumbnail} style={{height: 150}} />
                  </div>
                </div>
                <hr></hr>
              </React.Fragment>
            )}
          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Title</span>
            </div>
            <div className="col-sm-4 col-8">
              <span className="float-left ">{data.name}</span>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Date</span>
            </div>
            <div className="col-sm-4 col-8">
              <span className="float-left ">{data.Edate}</span>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Venue</span>
            </div>
            <div className="col-sm-4 col-8">
              <span className="float-left ">{data.venue}</span>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className=" col-4 col-sm-3 ">
              <span className="bold">Details</span>
            </div>
            <div className="col-sm-8 col-8">
              <span className="float-left ">{data.details} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default ViewEvent;
