import React, { Component } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Api } from "../../common/Api";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class NewsList extends Component {
  state = {
    classArray: [],
    news:[],
    classes: "All",
    searchString: "",
    info: false,
    deleteItem: "",
    loading: false,
  };

  componentDidMount() {
    Api("class", "get")
      .then((response) => {
        console.log(response.data);
        this.setState({
          classArray: response.data.class,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
    var data = {
      class: this.state.classes,
    };
    Api("news", "get", data)
      .then((response) => {
        console.log(response.data);
        this.setState({
          news: response.data.news,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  handleChangeSearch = (e) => {
    this.setState({ searchString: e.target.value });
  };
  handleChange = (e) => {
    this.setState({
      classes: e.target.value,
    });
    var data = {
      class: e.target.value,
    };
    Api("news", "get", data)
      .then((response) => {
        console.log(response.data);
        this.setState({
          news: response.data.news,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  toggleInfo = (value) => {
    this.setState({
      info: !this.state.info,
      deleteItem: value,
    });
  };
  delete = () => {
    this.setState({
      loading: true,
    });
    Api("news/" + this.state.deleteItem, "delete")
      .then((response) => {
        console.log(response);
        this.setState({
          info: false,
          loading: false,
        });
        this.componentDidMount();
      })
      .catch((error) => {
        console.log("error " + error);
        this.setState({
          loading: false,
        });
      });
  };
  render() {
    const columns = [
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Date",
        accessor: "Newsdate",
      },
      {
        Header: "Actions",
        accessor: "id",
        Cell: (props) => (
          <span className="">
            <Link
              to={{
                pathname: "/viewNews/" + props.value,
                state: {
                  search: props.value,
                },
              }}
            >
              <button className="btn btn-primary">
                <i className="icon-file-text"></i>
              </button>
            </Link>
            <Link
              to={{
                pathname: "/editNews/" + props.value,
                state: {
                  search: props.value,
                },
              }}
            >
              <button className="btn btn-success ml-2">
                <i className="icon-pencil"></i>
              </button>
            </Link>
            <button
              className="btn btn-danger ml-2"
              onClick={() => this.toggleInfo(props.value)}
            >
              <i className="icon-trash"></i>
            </button>
          </span>
        ),
      },
    ];
    var newsData = this.state.news,
    searchString = this.state.searchString.trim().toLowerCase();

    if (searchString.length > 0) {
      // We are searching. Filter the results.

      newsData = this.state.news.filter(function (l) {
        return l.title.toLowerCase().match(searchString);
      });
    }
    return (
      <div className="animated fadeIn">
        <div className="border bg-white">
          <div className="card ">
            <div className="card-header">
              <h3>NEWS</h3>
            </div>
          </div>
          <div className="card-body ">
          <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <select
                    className="form-control select py-2 px-3"
                    id="sel1"
                    name="classes"
                    value={this.state.classes}
                    onChange={this.handleChange}
                  >
                    <option disabled>Select Class</option>
                    <option value="All">All</option>
                    {this.state.classArray.map((element) => {
                      return (
                        <option key={element.id} value={element.id}>
                          {element.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="col-md-5 offset-md-4 col-sm-12">
                <div className="showComponentSearchBox">
                  <input
                    type="text"
                    placeholder="Search by title"
                    value={this.state.searchString}
                    onChange={this.handleChangeSearch}
                    className="float-left py-1 px-2 form-control"
                  />
                  <button className="btn btn-primary float-right py-1">
                    <i className="icon-search mr-2"></i>
                  </button>
                </div>
              </div>
            </div>
            <ReactTable
              columns={columns}
              data={newsData}
              defaultPageSize={5}
              noDataText={""}
              className="mt-5"
            ></ReactTable>
          </div>
          <Modal
            isOpen={this.state.info}
            toggle={this.toggleInfo}
            className={"modal-info " + this.props.className}
          >
            <ModalHeader toggle={this.toggleInfo}>Modal title</ModalHeader>
            <ModalBody>Are you sure you want to delete this?</ModalBody>
            <ModalFooter>
              {this.state.loading ? (
                <Button color="primary ">
                  <div
                    className="spinner-border spinner-border-sm"
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                </Button>
              ) : (
                <Button color="primary" onClick={this.delete}>
                  Delete
                </Button>
              )}
              <Button color="secondary" onClick={this.toggleInfo}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default NewsList;
