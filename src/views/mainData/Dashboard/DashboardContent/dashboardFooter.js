import React, { Component } from "react";

import { Pie } from "react-chartjs-2";
import { Card, CardBody, CardColumns, CardHeader } from "reactstrap";

import colorHouse from "../../img/colorHouse.png";
import colorVoucher from "../../img/colorVoucher.png";
import bluebox from "../../img/bluebox.png";
import darkbluebox from "../../img/darkBlueBox.png";

class DashboardFooter extends Component{
  state={
      pie: {
        labels: ["Arrears Collected", "New Arrears"],
        datasets: [
          {
            data: [300, 200],
            backgroundColor: ["#FF6384", "#36A2EB"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB"],
          },
        ]   
      },
      pie2 : {
        labels: ["UnPaid Fees", "Vouchers Generated"],
        datasets: [
          {
            data: [300, 200],
            backgroundColor: ["#4BC0C0", "#FFCE56"],
            hoverBackgroundColor: ["#4BC0C0", "#FFCE56"],
          },
        ]
      }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      console.log('pokemons state has changed.')
      this.setState({
        pie: {
          labels: ["Arrears Collected", "New Arrears"],
          datasets: [
            {
              data: [this.props.data.Arrearscollected, this.props.data.Unpaidarrears],
              backgroundColor: ["#FF6384", "#36A2EB"],
              hoverBackgroundColor: ["#FF6384", "#36A2EB"],
            },
          ]   
        },
        pie2 : {
          labels: ["UnPaid Fees", "Vouchers Generated"],
          datasets: [
            {
              data: [this.props.data.unpaidFees, this.props.data.vouchersGenerated],
              backgroundColor: ["#4BC0C0", "#FFCE56"],
              hoverBackgroundColor: ["#4BC0C0", "#FFCE56"],
            },
          ]
        }
      })
    }
  }
  render(){
    return (
      <div>
        <CardColumns className="cols-2">
          <Card>
            <CardHeader>Arrear Collection</CardHeader>
            <CardBody>
              <div>
                <Pie data={this.state.pie} />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>Fees Collection</CardHeader>
            <CardBody>
              <div>
                <Pie data={this.state.pie2} />
              </div>
            </CardBody>
          </Card>
        </CardColumns>
      </div>
    );
  }
}
export default DashboardFooter;