import React, { useState } from "react";
import axios from "axios";
import "./goals.css";
import DisplayGoals from "./getGoals";

const Goals = () => {
  const [goalTitle, setTitle] = useState("");
  const [goalTotal, setGoal] = useState("");
  const [achievedGoalBy, endGoal] = useState("");
  const [achievedGoal, setAchieved] = useState("");

  const addGoal = () => {
    const body = {
      goalTitle,
      goalTotal,
      achievedGoalBy,
      achievedGoal,
    };
    axios.post("/api/goal", body);
  };

  return (
    <div className='goals-container'>
      <div className="form">
        <div>
          <h1>Set Your Goal!</h1>
        </div>
        <div>
          <form onSubmit={addGoal}>
            <label>Goal Title:</label>
            <input
              className="input"
              required
              type="text"
              value={goalTitle}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Savings Amount:</label>
            <input
              className="input"
              required
              type="text"
              value={goalTotal}
              onChange={(e) => setGoal(e.target.value)}
            />
            <label>Save By:</label>
            <input
              className="input"
              placeholder="yyyy-mm-dd"
              required
              type="text"
              value={achievedGoalBy}
              onChange={(e) => endGoal(e.target.value)}
            />
            <label>Goal Achieved:</label>
            <select
              className="input"
              value={achievedGoal}
              onChange={(e) => setAchieved(e.target.value)}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
        <div>
          <button className="add-goal" >
            Add Goal
          </button>
        </div>
          </form>
        </div>
      </div>
      <div className='added-goal'>
        <DisplayGoals />
      </div>
    </div>
  );
};

export default Goals;
