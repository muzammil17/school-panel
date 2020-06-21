import React, { Component } from "react";

import student from "../../img/Layer 19.png";
import teacher from "../../img/Layer 18.png";
import voucher from "../../img/Layer 21.png";
import fees from "../../img/Layer 23.png";
import house from "../../img/Layer 20.png";

import darkBlue from "../../img/darkBlue.png";
import darkPink from "../../img/darkPink.png";
import green from "../../img/green.png";
import orange from "../../img/orange.png";
import yellow from "../../img/yellow.png";
import purple from "../../img/purple.png";
import pink from "../../img/pink.png";
import lightgreen from "../../img/lightGreen.png";

class DashBoardItems extends Component {
  state = {
    comps: [
      { number: "0", text: "Teachers", image: teacher, color: pink },
      { number: "0", text: "Students", image: student, color: green },
      { number: "0", text: "Employees", image: teacher, color: orange },
      {
        number: "0",
        text: "new",
        text2: "admissions",
        image: student,
        color: lightgreen
      },
      {
        number: "0",
        text: "new",
        text2: "arrears",
        image: house,
        color: purple
      },
      {
        number: "0",
        text: "unpaid",
        text2: "arrears",
        image: house,
        color: yellow
      },
      {
        number: "0",
        text: "vouchers",
        text2: "generated",
        image: voucher,
        color: darkBlue
      },
      {
        number: "0",
        text: "unpaid",
        text2: "fees",
        image: fees,
        color: darkPink
      }
    ]
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      console.log('pokemons state has changed.')
      this.setState({
        comps: [
          { number: this.props.data.teacher, text: "Teachers", image: teacher, color: pink },
          { number: this.props.data.student, text: "Students", image: student, color: green },
          { number: this.props.data.employee, text: "Employees", image: teacher, color: orange },
          {
            number: this.props.data.newAdmissions,
            text: "new",
            text2: "admissions",
            image: student,
            color: lightgreen
          },
          {
            number: this.props.data.Arrearscollected,
            text: "new",
            text2: "arrears",
            image: house,
            color: purple
          },
          {
            number: this.props.data.Unpaidarrears,
            text: "unpaid",
            text2: "arrears",
            image: house,
            color: yellow
          },
          {
            number: this.props.data.vouchersGenerated,
            text: "vouchers",
            text2: "generated",
            image: voucher,
            color: darkBlue
          },
          {
            number: this.props.data.unpaidFees,
            text: "unpaid",
            text2: "fees",
            image: fees,
            color: darkPink
          }
        ]
      })
    }
  }

  render() {
    const { comps } = this.state;
    const comp = comps.map(comp => {
      //console.log(comp)
      return (
        <div className="col-lg-4 col-sm-6 col-12 my-4 px-4" key={comp.color}>
          <div
            className="dashboard"
            style={{ backgroundImage: `url(${comp.color})` }}
          >
            <div className="row div1 align-items-center">
              <div className="col-sm-12 pt-5 ">
                <div className=" text-content text-center">
                  <h3 className="mb-1 bold"> {comp.number} </h3>
                  <span> {comp.text} </span> <br />
                  <span> {comp.text2} </span>
                </div>
              </div>
            </div>
            <div className="row div2">
              <div className="offset-7 col-sm-5">
                <img
                  src={comp.image}
                  height="70px"
                  className="float-right mr-1"
                  alt="HELLO"
                />
              </div>
            </div>
          </div>
        </div>
      );
    });

    return <div className="row">{comp}</div>;
  }
}

export default DashBoardItems;
