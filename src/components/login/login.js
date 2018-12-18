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
        body.background = "url('../../assets/bg.jpg') no-repeat center center fixed";
        body.backgroundSize = "cover"
        body.webkitBackgroundSize = "cover"
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
            <div>
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
                        
                        <label for={"email"}>Email</label>
                        <input type={"email"} name="email" required onInput={val => {console.log(val.target.value)}}/>

                        <label for={"password"}>Password</label>
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