import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './login.css';
import logo from '../../assets/logo.png';

class Login extends Component{
    state = {
        toHome: false,
    }

    onsubmit = (event) => {
        event.preventDefault()
        console.log(event.target.email.value)

        this.setState({toHome: true})
    }

    render(){
        return(
            <div id="login-body">
            {
                this.state.toHome ?
                (<Redirect to={"/home"} />)
                :
                <div className="login-card">
                    <div className="login-header">
                        <div className="sign-in">Sign In</div>
                        <div><img alt="UBA" src={logo} className="uba-logo-login"/></div>
                    </div>
                    <form onSubmit={this.onsubmit} className="login-form">
                        
                        <label htmlFor={"email"}>Email</label>
                        <input type={"email"} name="email" required onInput={val => {console.log(val.target.value)}}/>

                        <label htmlFor={"password"}>Password</label>
                        <input type={"password"} name="password" required onInput={val => {console.log(val.target.value)}}></input>

                        <Link to={"/"} className="forgot-password">Forgot Your Password?</Link>

                        <button>
                            Login<i style={{ float: "right" }} className="fa fa-angle-right"></i>
                        </button>
                    </form>
                    
                    <div style={{display: 'grid'}}>
                        <div className="no-account">Don't have an account?</div>
                        <button className="request-access-button">
                            <span className="request-access-text">Request for Access</span>
                            <i style={{ float: "right" }} className="fa fa-angle-right"></i>
                        </button>
                    </div>
                </div>
            }
            </div>
        )
    }
}

export default Login;