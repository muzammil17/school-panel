import React, { Component } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Link } from "react-router-dom";

import { Api } from "../../common/Api";

class CircularList extends Component {
  state = {
    classArray: [],
    circular: [],
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
    Api("classCircular", "get", data)
      .then((response) => {
        console.log(response.data);
        this.setState({
          circular: response.data.circular,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  handleChange = (e) => {
    this.setState({
      classes: e.target.value,
    });
    var data = {
      class: e.target.value,
    };
    Api("classCircular", "get", data)
      .then((response) => {
        console.log(response.data);
        this.setState({
          circular: response.data.circular,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  handleChangeSearch = (e) => {
    this.setState({ searchString: e.target.value });
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
    Api("circular/" + this.state.deleteItem, "delete")
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
     console.log("props", this.props);
    const columns = [
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Date",
        accessor: "circularDate",
      },
      {
        Header: "Actions",
        accessor: "id",
        Cell: (props) => (
          <span className="">
            <Link
              to={{
                pathname: "/viewCircular/" + props.value,
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
                pathname: "/editCircular/" + props.value,
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
    var circularData = this.state.circular,
      searchString = this.state.searchString.trim().toLowerCase();

    if (searchString.length > 0) {
      // We are searching. Filter the results.

      circularData = this.state.circular.filter(function (l) {
        return l.title.toLowerCase().match(searchString);
      });
    }
    return (
      <div className="animated fadeIn">
        <div className="border bg-white">
          <div className="card ">
            <div className="card-header">
              <h3>CIRCULARS</h3>
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
              data={circularData}
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

export default CircularList;
