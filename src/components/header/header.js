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
                        <span style={{margin:10}} class="fa-stack fa-xs">
                            {/* <i class="fa fa-stack-1x"></i> */}
                            <i style={{color: "white", backgroundColor:"grey", borderRadius:"30px"}} class="fa fa-bell fa-stack-1x"></i>
                        </span>
                        <span class="fa-stack fa-xs">
                            {/* <i class="fa fa-stack-2x"></i> */}
                            <i style={{color: "white", backgroundColor:"grey", borderRadius:"30px"}} class="fa fa-user fa-stack-1x"></i>
                        </span>
                        {/* <button onClick={this.onclick}></button> */}
                    </div>
                </div>
            }
            </div>
        )
    }
    
}

export default Header;