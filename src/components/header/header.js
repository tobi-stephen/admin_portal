import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import rewards from '../../assets/rewards-logo.png';
import './header.css';

class Header extends Component {
    state = { toLogin: false}

    // onclick = (event) => {
    //     event.preventDefault()
    //     this.setState({toLogin: true})
    // }

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