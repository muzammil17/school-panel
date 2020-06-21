import React, { Component } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import { Link } from "react-router-dom";
import axios from "axios";

class FeedbackList extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    axios.get(url).then((res) => {
      this.setState({
        posts: res.data,
      });
    });
  }

  render() {
    const columns = [
      {
        Header: "No",
        accessor: "userId",
      },
      {
        Header: "First Name",
        accessor: "id",
      },
      {
        Header: "Last name",
        accessor: "title",
      },
      {
        Header: "Actions",
        Cell: (props) => (
          <span className="">
            <Link>
              <button className="btn btn-primary">
                <i class="icon-file-text"></i>
              </button>
            </Link>
            <button className="btn btn-success ml-2">
              <i class="icon-pencil"></i>
            </button>
            <button className="btn btn-danger ml-2">
              <i class="icon-trash"></i>
            </button>
          </span>
        ),
      },
    ];

    return (
      <div className="animated fadeIn">
        <div className="border bg-white">
          <div className="card ">
            <div className="card-header">
              <h3>FEEDBACKS</h3>
            </div>
          </div>
          <div className="card-body ">
            <div className="row">
              <div className="col-md-5 offset-md-7 col-sm-12">
                <div className="showComponentSearchBox">
                  <input
                    type="text"
                    placeholder="Search by name"
                    className="float-left py-1 px-2"
                  />
                  <button className="btn btn-primary float-right py-1">
                    <i class="icon-search mr-2"></i>
                  </button>
                </div>
              </div>
            </div>
            <ReactTable
              columns={columns}
              data={this.state.posts}
              defaultPageSize={5}
              noDataText={""}
              className="mt-5"
            ></ReactTable>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedbackList;
