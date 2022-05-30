import logo from './logo.svg';
import React from "react";
import { Link, Router } from "react-router-dom";
import { Helmet } from "react-helmet"
import './assets/registerpage.css'
;
function Register() {
  return (
    <div className='Login'>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="container2">
        <div className="vectorgroup1"></div>
        <div className="vectorgroup2"></div>
        <div className="registerbox1">
            <form>
                <input className="fullnamebox" placeholder="Full Name" />
            </form>
            <form>
                <input className="passwordbox" placeholder="Password" type="password" />
            </form>
            <form>
                <input className="emailbox" placeholder="Email" />
            </form>
            <div className='registertext1'>Register</div>
            <Link to="/home">
            <div className="proceedregisterbox"></div>
            <div className="proceedregister">Register</div>
            </Link>
            <Link to="/login">
            <div className="tologinpage">Already have an account ? Klik <span className="span">Here</span></div>
            </Link>
        </div>
        <div className="icon"></div>
    </div>
  </div>
  );
}

export default Register;
