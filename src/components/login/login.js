import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import logo from './logo.png';

class Login extends Component{


    render(){
        return(
            <div className="login-bg">
                <div className="login-card">
                    <form onSubmit={()=>{}} className="login-form">
                        <div className="login-header">
                            <div className="sign-in">Sign In</div>
                            <div className="sign-in-logo"><img alt="UBA" src={logo} className="uba-logo"/></div>
                        </div>
                        <span className="login-email">Email</span>
                        <input className="login-input"></input>
                        <span className="login-password">Password</span>
                        <input className="login-input" type={"password"}></input>
                        <Link to={"/"} className="forgot-your-password">Forgot Your Password</Link>
                        <input type="submit" className="login-button login-text" value="Login"></input>
                        <div className="no-account">Don't have an account?</div>
                        <button className="request-access-button"><span className="request-access-text">Request for Access</span></button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;