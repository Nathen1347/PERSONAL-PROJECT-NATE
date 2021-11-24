import React, { Component } from "react";
import axios from "axios";
import "./getExpenses.css";
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

  deleteExpense = (id) => {
    axios
      .delete(`/api/budget/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          expenses: this.state.expenses.filter(
            (expenses) => expenses.id !== id
          ),
        });
      })
      .catch((error) => console.log(error));
  };
  render() {
    const { expenses } = this.state;
    const expenseTotal = expenses.reduce(
      (totalExpense, expense) => totalExpense + expense.expense_amount,
      0
    );
    return (
      <div className='expense-cont'>
        <div className='added-expense-cont'>
          {expenses.length
            ? expenses.map((expense) => (
                <div key={expense.id} className="get-expense">
                  <div>Item: {expense.item}</div>
                  <div>Category: {expense.category}</div>
                  <div>Total: ${expense.expense_amount}</div>
                  <button
                    className="delete-expense"
                    onClick={() => this.deleteExpense(expense.id)}
                  >
                    X
                  </button>
                </div>
              ))
            : null}
        </div>
        <div className='total-expense'>Total: -${expenseTotal}</div>
      </div>
    );
  }
}

export default DisplayExpenses;
