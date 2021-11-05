import React, { Component } from "react";
import axios from "axios";

class DisplayExpenses extends Component {
  constructor() {
    super();
    this.state = {
      expenses: [],
    };
  }

  componentDidMount = () => {
    axios
      .get("/api/budget")
      .then((response) => {
        console.log(response);
        this.setState({ expenses: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { expenses } = this.state;
    return (
      <div>
        {expenses.length
          ? expenses.map((expense) => <div key={expense.id}>{expense.id}</div>)
          : null}
      </div>
    );
  }
}

export default DisplayExpenses;
