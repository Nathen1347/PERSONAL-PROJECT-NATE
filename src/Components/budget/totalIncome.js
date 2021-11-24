import React, { Component } from "react";
import axios from "axios";

class TotalIncome extends Component {
  constructor() {
    super();
    this.state = {
      income: [],
    };
  }
  componentDidMount = () => {
    axios
      .get("/api/income")
      .then((response) => {
        console.log(response);
        this.setState({ income: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { income } = this.state;
    const totalPay = income.reduce(
      (payTotal, income) => payTotal + income.income_amount,
      0
    );
    console.log(totalPay);
    return <div>{totalPay}</div>;
  }
}

export default TotalIncome;
