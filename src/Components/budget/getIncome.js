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
    const totalPay = income.reduce(
      (payTotal, income) => payTotal + income.income_amount,
      0
    );
    
    return (
      <div className='income-cont'>
        <div className='added-income-cont'>
          {income.length
            ? income.map((income) => (
                <div key={income.id} className="added-income">
                  <div>Source of Income: {income.income_source}</div>
                  <div>Income Total: ${income.income_amount}</div>
                  <button
                    className="delete-button"
                    onClick={() => this.deleteIncome(income.id)}
                  >
                    X
                  </button>
                </div>
              ))
            : null}
        </div>
        <div className="total-income">Total: ${totalPay}</div>
      </div>
    );
  }
}

export default DisplayIncome;
