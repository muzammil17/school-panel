import React, { Component } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap'
import { Api } from "../../common/Api";

class EventList extends Component {
  state = {
    upcoming: [],
    previous: [],
    searchString: '',
    searchStringPrevious: '',
    activeTab: new Array(4).fill('1'),
  };

  componentDidMount() {
    Api("events", "get")
      .then((response) => {
        console.log(response.data);
        this.setState({
          upcoming: response.data.events.upcoming,
          previous: response.data.events.previous
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice()
    newArray[tabPane] = tab
    this.setState({
      activeTab: newArray,
    });
  }
  tabPane() {
    return (
      <>
        <TabPane tabId="1">
          {this.upcoming()}
        </TabPane>
        <TabPane tabId="2">
          {this.previous()}
        </TabPane>
      </>
    );
  }
  handleChangeSearch = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  upcoming(){
    const columns = [
      {
        Header: "Date",
        accessor: "Edate",
      },
      {
        Header: "Title",
        accessor: "name",
      },
      {
        Header: "Venue",
        accessor: "venue",
      },
      {
        Header: "Actions",
        accessor: "id",
        Cell: (props) => (
          <span className="">
            <Link to={{
              pathname:"viewEvent/"+props.value
            }}>
              <button className="btn btn-primary">
                <i class="icon-file-text"></i>
              </button>
            </Link>
            <Link to={{
                pathname: '/editEvent/' +props.value, state: {
                search: props.value
                }
            }}>
            <button className="btn btn-success ml-2">
              <i class="icon-pencil"></i>
            </button>
            </Link>
            <button className="btn btn-danger ml-2" onClick={() => this.toggleInfo(props.value)}>
              <i class="icon-trash"></i>
            </button>
          </span>
        ),
      },
    ];
    var eventData = this.state.upcoming,
    searchString = this.state.searchString.trim().toLowerCase();

    if (searchString.length > 0) {
      // We are searching. Filter the results.

      eventData = this.state.upcoming.filter(function (l) {
        return l.name.toLowerCase().match(searchString);
      });
    }
    return(
      <div className="card-body ">
            <div className="row">
              <div className="col-md-5 offset-md-7 col-sm-12">
                <div className="showComponentSearchBox">
                  <input
                    type="text"
                    placeholder="Search by title"
                    className="float-left py-1 px-2"
                    name="searchString"
                    value={this.state.searchString}
                    onChange={this.handleChangeSearch}
                  />
                  <button className="btn btn-primary float-right py-1">
                    <i class="icon-search mr-2"></i>
                  </button>
                </div>
              </div>
            </div>
            <ReactTable
              columns={columns}
              data={eventData}
              defaultPageSize={5}
              noDataText={""}
              className="mt-5"
            ></ReactTable>
          </div>
    )
  }
  previous(){
    const columns = [
      {
        Header: "Date",
        accessor: "Edate",
      },
      {
        Header: "Title",
        accessor: "name",
      },
      {
        Header: "Venue",
        accessor: "venue",
      },
      {
        Header: "Actions",
        accessor: "id",
        Cell: (props) => (
          <span className="">
            <Link to={{
              pathname:"viewEvent/"+props.value
            }}>
              <button className="btn btn-primary">
                <i class="icon-file-text"></i>
              </button>
            </Link>
            <Link to={{
                pathname: '/editEvent/' +props.value, state: {
                search: props.value
                }
            }}>
            <button className="btn btn-success ml-2">
              <i class="icon-pencil"></i>
            </button>
            </Link>
            <button className="btn btn-danger ml-2" onClick={() => this.toggleInfo(props.value)}>
              <i class="icon-trash"></i>
            </button>
          </span>
        ),
      },
    ];
    var eventData = this.state.previous,
    searchStringPrevious = this.state.searchStringPrevious.trim().toLowerCase();

    if (searchStringPrevious.length > 0) {
      // We are searching. Filter the results.

      eventData = this.state.previous.filter(function (l) {
        return l.name.toLowerCase().match(searchStringPrevious);
      });
    }
    return(
      <div className="card-body ">
            <div className="row">
              <div className="col-md-5 offset-md-7 col-sm-12">
                <div className="showComponentSearchBox">
                  <input
                    type="text"
                    placeholder="Search by title"
                    className="float-left py-1 px-2"
                    name="searchStringPrevious"
                    value={this.state.searchStringPrevious}
                    onChange={this.handleChangeSearch}
                  />
                  <button className="btn btn-primary float-right py-1">
                    <i class="icon-search mr-2"></i>
                  </button>
                </div>
              </div>
            </div>
            <ReactTable
              columns={columns}
              data={eventData}
              defaultPageSize={5}
              noDataText={""}
              className="mt-5"
            ></ReactTable>
          </div>
    )
  }
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
    Api("event/" + this.state.deleteItem, "delete")
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
  
    return (
      <div className="animated fadeIn">
        <div className="border bg-white">
          <div className="card ">
            <div className="card-header">
              <h3>EVENTS</h3>
            </div>
          </div>
          <Row>
          <Col xs="12" md="12" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '1'}
                  onClick={() => { this.toggle(0, '1'); }}
                >
                  Upcoming
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '2'}
                  onClick={() => { this.toggle(0, '2'); }}
                >
                  Previous
                </NavLink>
              </NavItem>
              
            </Nav>
            <TabContent activeTab={this.state.activeTab[0]}>
              {this.tabPane()}
            </TabContent>
          </Col>
        </Row>
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

export default EventList;
