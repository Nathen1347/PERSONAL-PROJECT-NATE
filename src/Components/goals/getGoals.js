import React, { Component } from "react";
import axios from "axios";
import "./goals.css";
import EditSavingsAmount from "./editSaveAmount";

class DisplayGoals extends Component {
  constructor() {
    super();
    this.state = {
      goals: [],
    };
  }
  componentDidMount = () => {
    axios.get("/api/goal").then((response) => {
      console.log(response);
      this.setState({ goals: response.data });
    });
  };

  deleteGoal = (id) => {
    axios.delete(`/api/goal/${id}`).then((response) => {
      console.log(response);
      this.setState({
        goals: this.state.goals.filter((goals) => goals.id !== id),
      });
    });
  };

  changeGoals = (goals) => {
    this.setState({goals})
  }
  render() {
    const { goals } = this.state;
    return (
      <div>
        <h1 className="my-goals">MY GOALS</h1>
        {goals.length
          ? goals.map((goal) => (
              <div key={goal.id} className="added-goals">
                <div className="added-goal-container">
                  <div>
                    <div className="goal-title">{goal.goal_title}</div>
                    <div className="goal-total">
                      Goal Total: ${goal.goal_total}
                    </div>
                    <div className="goal-total">
                      Amount Saved: ${goal.amount_now}
                    </div>
                    <div className="goal-date">Save By: {goal.save_date}</div>
                    <button
                      className="delete-goal"
                      onClick={() => this.deleteGoal(goal.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="delete-goal"
                      onClick={() => this.deleteGoal(goal.id)}
                    >
                      Completed
                    </button>
                  </div>
                  <div>
                    <EditSavingsAmount currentAmount={goal.amount_now} id={goal.id} changeGoals={this.changeGoals}/>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default DisplayGoals;
