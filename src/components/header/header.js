import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import rewards from '../../assets/rewards-logo.png';
import './header.css';

class Header extends Component {
    state = { toLogin: false}

    onclick = (event) => {
        event.preventDefault()

        let s = document.getElementById("sidebar-nav");
        let m = document.getElementById("main-nav");
        if (s.style.display !== "none"){
            s.style.display = "none";
            m.style.margin = "3%";
        }
        else{
            let w = window.innerWidth
            console.log(w)
            if (w < 720){
                m.style.marginLeft = (350).toString() + "px";
            }
            else
                m.style.marginLeft = (400).toString() + "px";
            s.style.display = "block";
            s.style.transition = "margin-left .5s";
            
        }
             
    }

    render(){
        return(
            <div>{
                this.state.toLogin ?
                (<Redirect to={"/login"} />)
                :
                <div className="rewards-portal">
                    <button onClick={this.onclick} className="menu-bars"><i className="fa fa-bars" ></i></button>
                    <Link to={"/home"}>
                        <img alt="Rewards Portal" src={rewards} className="rewards-logo"/>
                    </Link>
                    <div className="icon-right">
                        <div style={{margin:10}} className="fa-stack fa-sm drop-down">
                            <div className="drop-btn">
                                <Link to={"#"}>
                                    <i className="fa fa-bell fa-stack-1x"></i>
                                </Link>
                            </div>
                            <div className="drop-down-content">
                                <Link to={"#"}>No Notifications</Link>
                            </div>
                        </div>
                        <div className="fa-stack fa-sm drop-down">
                            <div className="drop-btn">
                                <Link to={"#"}>
                                    <i className="fa fa-user fa-stack-1x"></i>
                                </Link>
                            </div>
                            <div className="drop-down-content">
                                <Link to={"/login"}>Log Out</Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
            </div>
        )
    }
    
}

export default Header;