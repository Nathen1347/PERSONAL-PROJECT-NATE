import React, { useState } from "react";
import axios from "axios";
import "./goals.css";
import DisplayGoals from "./getGoals";

const Goals = () => {
  const [goalTitle, setTitle] = useState("");
  const [goalTotal, setGoal] = useState("");
  const [saveDate, endGoal] = useState("");
  const [amountNow, amountStart] = useState("");

  const addGoal = () => {
    const body = {
      goalTitle,
      goalTotal,
      saveDate,
      amountNow,
    };
    axios.post("/api/goal", body);
  };

  return (
    <div className="goals-container">
      <div> <div className='info'>
        <h1>Set Your Finance Goal Below</h1>
      </div>
      <div className="form">
        <div>
          <form>
            <label className='label-goals'>Goal Title:</label>
            <input
              className="input"
              required
              type="text"
              value={goalTitle}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className='label-goals'>Savings Amount:</label>
            <input
              className="input"
              required
              type="text"
              value={goalTotal}
              onChange={(e) => setGoal(e.target.value)}
            />
            <label className='label-goals'>Starting Amount:</label>
            <input
              className="input"
              required
              type="text"
              value={amountNow}
              onChange={(e) => amountStart(e.target.value)}
            />
            <label className='label-goals'>Save By:</label>
            <input
              className="input"
              required
              type="text"
              value={saveDate}
              onChange={(e) => endGoal(e.target.value)}
            />
          <div>
            <button className="add-goal" onClick={addGoal}>Add Goal</button>
          </div>
          </form>
        </div>
      </div>
      </div>
      <div className="added-goal">
        <DisplayGoals />
      </div>
    </div>
  );
};

export default Goals;
