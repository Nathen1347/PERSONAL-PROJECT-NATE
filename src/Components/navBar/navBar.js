import React, { Component } from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import axios from "axios";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      menuClick: false,
      user: [],
    };
  }

  handleClick = () => {
    this.setState({ menuClick: !this.state.menuClick });
  };

  logOut = () => {
    axios.delete("/api/logout");
  };

  componentDidMount = () => {
    axios.get("/api/me").then((response) => {
      console.log(response);
      this.setState({ user: response.data });
      
    });
  };

  render() {
    const {user} = this.state;
    return (
      <nav className="Navbar">
        <div className="logo-container">
          <h1 className="Logo">MODERN FINANCE</h1>
        </div>
        <div className="Menu" onClick={this.handleClick}>
          <i
            className={this.state.menuClick ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <div className="">
          <ul className={this.state.menuClick ? "nav-menu active" : "nav-menu"}>
            <Link to="/budget" className="Link-style">
              <li className="nav-links">Budget</li>
            </Link>
            <Link to="/goals" className="Link-style">
              <li className="nav-links">Goals</li>
            </Link>
            <Link to="/shop" className="Link-style">
              <li className="nav-links">Shop</li>
            </Link>
            <Link to="/about" className="Link-style">
              <li className="nav-links">About</li>
            </Link>
          </ul>
        </div>
        <div>
          {user.length ? user.map((myself)=>(
            <div className='user'>{myself.first_name}</div>
          )): null}
        </div>
        <div>
          {" "}
          <Link to="/login">
            <button className="Log-out" onClick={this.logOut}>
              Log Out
            </button>
          </Link>
        </div>
      </nav>
    );
  }
}
export default NavBar;
