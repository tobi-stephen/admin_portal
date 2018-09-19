import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
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
                    <img alt="Rewards Portal" src={rewards} className="rewards-logo"/>
                    <div className="icon-right">
                        <span>Hello, Admin  </span>
                        <button onClick={this.onclick}>Log Out</button>
                    </div>
                </div>
            }
            </div>
        )
    }
    
}

export default Header;