import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './login.css';
import logo from '../../assets/logo.png';

class Login extends Component{
    state = {
        toHome: false,
    }

    componentDidMount(){
        let body = document.body.style
        body.backgroundImage = "url('../../assets/bg.jpg')";
        body.backgroundRepeat = "no-repeat";
        body.width = "100%";
        body.height = "auto";
    }

    componentWillUnmount(){
        let body = document.body.style
        body.background = "none";
    }

    onsubmit = (event) => {
        event.preventDefault()
        console.log(event.target.email.value)

        this.setState({toHome: true})
    }

    render(){
        return(
            this.state.toHome ?
            <Redirect to={"/home"} />
            :
            <div className="login-bg">
                <div className="login-card">
                    <form onSubmit={this.onsubmit} className="login-form">
                        <div className="login-header">
                            <div className="sign-in">Sign In</div>
                            <div className="sign-in-logo"><img alt="UBA" src={logo} className="uba-logo"/></div>
                        </div>
                        <span className="login-email">Email</span>
                        <input className="login-input" type={"email"} name="email" required onInput={val => {console.log(val.target.value)}}></input>
                        <span className="login-password">Password</span>
                        <input className="login-input" type={"password"} name="password" required onInput={val => {console.log(val.target.value)}}></input>
                        <Link to={"/"} className="forgot-password">Forgot Your Password</Link>
                        <input type="submit" className="login-button login-text" value="Login"></input>
                        <div className="no-account">Don't have an account?</div>
                    </form>
                    <button className="request-access-button"><span className="request-access-text">Request for Access</span></button>
                </div>
            </div>
        )
    }
}

export default Login;