import React from 'react';
import rewards from '../../assets/rewards-logo.png';
import './header.css';

const Header = () => {
    return(
        <div className="rewards-portal">
            <img alt="Rewards Portal" src={rewards} className="rewards-logo"/>
            <div className="icon-right">Hello, Admin</div>
        </div>
    )
}

export default Header;