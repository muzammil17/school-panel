import React, { Component } from "react";
import DashBoardItems from "./DashboardContent/dashBoardItems";
import DashboardFooter from "./DashboardContent/dashboardFooter";
import { Api } from "../../common/Api";


class Dashboard2 extends Component {
  state={
    data: null
  }
  componentDidMount(){
    Api('recordNo', 'get')
    .then(response=>{
      console.log(response.data);
      this.setState({
        data: response.data.recordNo
      })
    })
    .catch(error=>{
      console.log(error)
    })
  }
  render() {
    return (
      <div className="animated fadeIn">
        <div>
          <div>
            <DashBoardItems data={this.state.data} />
          </div>
          <div>
            <DashboardFooter data={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard2;
