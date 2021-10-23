import React, { Component } from "react";
import axios from "axios";
import './loginUser.css'
import {Link} from 'react-router-dom'

class Login extends Component {
  constructor() {
    super();
    this.state = {
        username: '',
        password: '',
        clickedRegister: false,
    };
  }

  handleUsernameInput = (e) => {
      this.setState({username: e.target.value})
  }

  handlePassInput = (e) => {
      this.setState({password: e.target.value})
  }

  login = () => {
    
    axios.post('/api/login')
  }

  render() {
    return (
      <div className='Login-container'>
        <div className='Logo-login'>
          <h1 className='Logo-login-background'>Modern Finance</h1>
        </div>
        <div className='Input-container'>
          <input className='Inputs' placeholder='USERNAME' onChange={this.handleUsernameInput}/>
        </div>
        <div className='Input-container'>
          <input className='Inputs' type='password' placeholder='PASSWORD' onChange={this.handlePassInput}/>
        </div>
        <div className='Buttons-container'>
        <button className='Buttons-login'>Login</button>
        <Link to='register'>
        <button className='Buttons-login'>Register</button>
        </Link>
        </div>
      </div>
    );
  }
}

export default Login;
