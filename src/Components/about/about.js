import React from "react";
import "./about.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="main-container">
      <div className="about-container1">
        <h1>About Us</h1>
        <p>
          This website is a tool that will help you on your way to financial
          freedom! Learn to budget your income and track expenses. Set savings
          goals for vacations or for your next big purchase with our goal
          tracker. We also have a shop where you can buy Modern Finance merch!
        </p>
      </div>
      <div className='about-bss-container'>
        <div className="about-containers">
          <h1>Budget and Track your Expenses</h1>
          <Link to="/budget">
            <button className="about-buttons">Budget</button>
          </Link>
        </div>
        <div className="about-containers">
          <h1>Set Savings Goals for yourself</h1>
          <Link to="/goals">
            <button className="about-buttons">Set a Goal</button>
          </Link>
        </div>
        <div className="about-containers">
          <h1>Shop Exclusive Modern Finance Merch</h1>
          <Link to="/shop">
            <button className="about-buttons">Shop Now</button>
          </Link>
        </div>
        <div className='about-containers'>
            <h1>Contact Us</h1>
            <p>Customer Service: 1-800-999-9999</p>
            <p>Email: Modern.Finance.2021@outlook.com </p>
        </div>
      </div>
    </div>
  );
}

export default About;
