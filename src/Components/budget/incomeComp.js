import React, { useState } from "react";
import axios from "axios";
import './income.css';

const Income = () => {
  const [incomeSource, setIncomeSource] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");
  const [payDate, setPayDate] = useState("");

  const incomeSubmit = () => {
    const body = {
      incomeSource,
      incomeAmount,
      payDate,
    };
    axios.post("/api/income", body);
  };

  return (
    <div>
      <form onSubmit={incomeSubmit} className='form-income'>
        <label>Source of Income:</label>
        <input
        className='input-income'
          required
          value={incomeSource}
          onChange={(e) => setIncomeSource(e.target.value)}
        />
        <label>Income Amount:</label>
        <input
        className='input-income'
          required
          value={incomeAmount}
          onChange={(e) => setIncomeAmount(e.target.value)}
        />
        <label>Pay Day:</label>
        <input
        className='input-income'
          required
          value={payDate}
          onChange={(e) => setPayDate(e.target.value)}
        />
        <button className='add-income'>Add</button>
      </form>
    </div>
  );
};

export default Income;
