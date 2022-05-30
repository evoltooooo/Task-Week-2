import logo from './logo.svg';
import React from "react";
import { Link, Router } from "react-router-dom";
import { Helmet } from "react-helmet"
import './assets/loginpage.css'
;
function Login() {
  return (
    <div className='Login'>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="container1">
        
        <div className="signinbox">
                <Link to="/adminpage">
                  <div className="passwordbox"></div>
                  <div className="password">Password</div>
                </Link>
            <div className="emailbox"></div>
            <div className="email">Email</div>
                <Link to="/home">
                <div className="proceedloginbox"></div>
                <div className="proceedlogin">Login</div>
                </Link>
                <Link to="/register">
                <div className="toregisterpage">Don't have an account ? Klik <span className="span">Here</span></div>
                </Link>
            <div className='logintext1'>Login</div>
        </div>
        <div className="vectorgroup1"></div>
        <div className="vectorgroup2"></div>
        <div className="icon"></div>
    </div>
  </div>
  );
}

export default Login;
