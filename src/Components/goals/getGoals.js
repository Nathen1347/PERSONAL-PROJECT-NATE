import React, { Component } from "react";
import axios from "axios";
import "./goals.css";

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
    axios.delete(`/api/goal/${id}`)
    .then((response)=> {
      console.log(response)
      this.setState({goals: this.state.goals.filter()})
    })
  }
  render() {
    const { goals } = this.state;
    return (
      <div>
        <h1 className='my-goals'>MY GOALS</h1>
        {goals.length
          ? goals.map((goal) => (
              <div key={goal.id} className="added-goals">
                <div className='goal-title'>{goal.goal_title}</div>
                <div className='goal-total'>Goal Total: ${goal.goal_total}</div>
                <div>{goal.achieved_goal}</div>
                <div className='goal-date'>Save Date: {goal.achieve_goal_by}</div>
                <button className='delete-goal' onClick={()=>this.deleteGoal(goal.id)}>Delete</button>
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default DisplayGoals;
