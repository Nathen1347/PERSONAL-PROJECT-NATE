import React, { Component } from "react";
import axios from "axios";
import "./budgetMain.css";
import "./getIncome.css";
class DisplayIncome extends Component {
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

  deleteIncome = (id) => {
    axios
      .delete(`/api/income/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          income: this.state.income.filter((income) => income.id !== id),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { income } = this.state;
    console.log(income);
    return (
      <div>
        {income.length
          ? income.map((income) => (
              <div key={income.id} className="added-income">
                <div>Source of Income: {income.income_source}</div>
                <div>Income Total: ${income.income_amount}</div>
                <div>DATE</div>
                <button
                  className="delete-button"
                  onClick={() => this.deleteIncome(income.id)}
                >
                  DELETE
                </button>
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default DisplayIncome;
