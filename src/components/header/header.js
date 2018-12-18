import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import rewards from '../../assets/rewards-logo.png';
import './header.css';

class Header extends Component {
    state = { toLogin: false}

    onclick = (event) => {
        event.preventDefault()
        this.setState({toLogin: true})
    }

    render(){
        return(
            <div>{
                this.state.toLogin ?
                (<Redirect to={"/login"} />)
                :
                <div className="rewards-portal">
                    <Link to={"/home"}>
                        <img alt="Rewards Portal" src={rewards} className="rewards-logo"/>
                    </Link>
                    <div className="icon-right">
                        <div style={{margin:10}} class="fa-stack fa-sm dropdown">
                            <i style={{color: "white", backgroundColor:"grey", borderRadius:"30px"}} class="fa fa-bell fa-stack-1x"></i>
                        </div>
                        <div class="fa-stack fa-sm"
                            onClick={() => {
                                let disp = document.getElementById("options");

                                if (disp.style.display === "block")
                                    disp.style.display = "none";
                                else
                                    disp.style.display = "block";
                            }}
                            >
                            <Link to={"#"}>
                                <i style={{color: "white", backgroundColor:"grey", borderRadius:"30px"}} class="fa fa-user fa-stack-1x"></i>
                            </Link>
                            <div className="user-options" id="options">
                                <button onClick={this.onclick}>Log Out</button>
                            </div>
                        </div>
                        {/* <button onClick={this.onclick}></button> */}
                    </div>
                </div>
            }
            </div>
        )
    }
    
}

export default Header;