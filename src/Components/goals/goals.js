import React, { useState } from "react";
import axios from "axios";
import "./goals.css";

const Goals = () => {
  const [title, setTitle] = useState("");
  const [savingsGoal, setGoal] = useState("");
  const [savingsEnd, endGoal] = useState("");
  const [achieved, setAchieved] = useState("")

  const addGoal = () => {
    const body = {
      title: title,
      savingsGoal: savingsGoal,
      savingsEnd: savingsEnd,
    };
    axios.post("/api/goals", body);
  };

  return (
    <div className="form">
      <div>
        <h1>Set Your Goal!</h1>
      </div>
      <div><form>
        <label>Goal Title:</label>
        <input
          className="input"
          required
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Savings Amount:</label>
        <input
          className="input"
          required
          type="text"
          value={savingsGoal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <label>Save By:</label>
        <input
          className="input"
          placeholder="yyyy-mm-dd"
          required
          type="text"
          value={savingsEnd}
          onChange={(e) => endGoal(e.target.value)}
        />
        <label>Goal Achieved:</label>
        <select className='input' value={achieved} onChange={(e)=>setAchieved(e.target.value)}>
            <option value='No'>No</option>
            <option value='Yes'>Yes</option>
        </select>
      </form>
      </div>
        <div><button className='add-goal'onClick={() => addGoal}>Add Goal</button></div>
    </div>
  );
};

export default Goals;
