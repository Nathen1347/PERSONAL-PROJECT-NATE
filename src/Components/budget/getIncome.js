import React, { Component } from "react";
import axios from "axios";
import './budgetMain.css'
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
      axios.delete(`/api/income/${id}`)
  }
  render() {
    const { income } = this.state;
    return (
      <div>
        {income.length
          ? income.map((income) => (
              <div key={income.id} className='added-income'>{income.id}<button onClick={this.deleteIncome}>DELETE</button></div>
              
            ))
          : null}
      </div>
    );
  }
}

export default DisplayIncome;
