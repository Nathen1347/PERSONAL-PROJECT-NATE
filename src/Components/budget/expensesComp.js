import React, { useState } from "react";
import axios from "axios";
import "./expenses.css";

const Expenses = () => {
  const [item, setItem] = useState("");
  const [category, setCategory] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const addExpenses = () => {
    const body = {
      item,
      category,
      purchaseDate,
      expenseAmount,
    };

    axios.post("/api/budget", body);
  };
  
  return (
    <div>
      <form className="form-budget" onSubmit={addExpenses}>
        <label>Item:</label>
        <input
          className="input-expenses"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <label>Category:</label>
        <select
          className="input-expenses2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Bill</option>
          <option>Entertainment</option>
          <option>Food</option>
        </select>

        <label>Date:</label>
        <input
          className="input-expenses2"
          value={purchaseDate}
          onChange={(e) => setPurchaseDate(e.target.value)}
        />
        <label>Total:</label>
        <input
          className="input-expenses2"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
        />
        <button className="add-expenses">Add</button>
      </form>
    </div>
  );
};

export default Expenses;
