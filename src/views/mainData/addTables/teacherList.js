import React, { Component } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import { Link } from "react-router-dom";
import { Api } from "../../common/Api";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class TeacherList extends Component {
  state = {
    teachers: [],
    deleteItem: "",
    laoding: false,
    info: false,
    searchString: "",
  };

  componentDidMount() {
    Api("teacher", "get")
      .then((res) => {
        console.log(res);
        this.setState({
          teachers: res.data.Teachers,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
    console.log(this.state.deleteItem)
    Api("teacher/" + this.state.deleteItem, "delete")
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
        Header: "First Name",
        accessor: "FirstName",
      },
      {
        Header: "Contact No",
        accessor: "ContactNo",
      },
      {
        Header: "Actions",
        accessor: "id",
        Cell: (props) => {
          console.log(props);
          return (
            <span className="">
              <Link
                to={{
                  pathname: "/viewTeacher/" + props.value,
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
                  pathname: "/editTeacher/" + props.value,
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
                onClick={() => {
                  this.toggleInfo(props.value);
                }}
              >
                <i className="icon-trash"></i>
              </button>
            </span>
          );
        },
      },
    ];

    let teacherData = this.state.teachers,
      searchString = this.state.searchString.trim().toLowerCase();
    if (searchString.length > 0) {
      teacherData = this.state.teachers.filter((l) => {
        return l.ContactNo.toLowerCase().match(searchString);
      });
    }

    return (
      <div className="animated fadeIn">
        <div className="border bg-white">
          <div className="card ">
            <div className="card-header">
              <h3>TEACHERS</h3>
            </div>
          </div>
          <div className="card-body ">
            <div className="row">
              <div className="col-md-5 offset-md-7 col-sm-12">
                <div className="showComponentSearchBox">
                  <input
                    type="text"
                    placeholder="Search by contact no"
                    className="float-left py-1 px-2"
                    value={this.state.searchString}
                    onChange={this.handleChangeSearch}
                  />
                  <button className="btn btn-primary float-right py-1">
                    <i className="icon-search mr-2"></i>
                  </button>
                </div>
              </div>
            </div>
            <ReactTable
              columns={columns}
              data={teacherData}
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

export default TeacherList;
