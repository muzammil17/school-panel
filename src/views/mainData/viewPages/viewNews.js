import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Api } from "../../common/Api";
import { serverUrlImage } from "../../utils/Constants";

class ViewNews extends Component{
  state = {
    data: {},
    loading: true,
  };
  componentDidMount(){
    console.log(this.props.match);
    
    Api('news/'+this.props.match.params.newsId, 'get')
      .then(response=>{
        console.log(response.data);
        this.setState({
          data: response.data.news,
          id: response.data.news.id,
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
          <h2 className="float-left">NEWS</h2>
          <span className="float-right mt-2">
            <Link color="primary" to={{
                pathname: '/editNews/' + this.state.id, state: {
                search: this.state.id
                }
            }}>Edit</Link>
          </span>
        </div>
        <div className="card-body">
          {data.image  && (
              <React.Fragment>
                <div className="row">
                  <div className=" col-6 col-sm-3 ">
                    <img src={serverUrlImage + data.image} style={{height: 150}} />
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
              <span className="bold">Title</span>
            </div>
            <div className="col-sm-4 col-8">
              <span className="float-left ">{data.title}</span>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Class</span>
            </div>
            <div className="col-sm-4 col-8">
              <span className="float-left ">{data ? data.class != 'All' ? data.classes.name : 'All' : ''}</span>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className=" col-6 col-sm-3 ">
              <span className="bold">Description</span>
            </div>
            <div className="col-sm-4 col-8">
              <span className="float-left ">{data.body}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default ViewNews;
