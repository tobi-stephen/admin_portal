import React, { Component } from 'react';
import './home.css';
import rewards from '../../assets/rewards-logo.png';
import Sidebar from '../sidebar/sidebar';

class Home extends Component{
    render(){
        return(
            <div>
                <div className="rewards-portal"><img alt="Rewards Portal" src={rewards} className="rewards-logo"/></div>
                <Sidebar/>
                <div className="main">
                    <div className="main-top">
                        <div className="dashboard">Dashboard</div>
                        <div className="search">
                            <form onSubmit={null}>
                                <input type="text" placeHolder="Search" />
                                <button type="submit" style={styles.searchButton}><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                    <div className="main-below">
                        <div class="section-1">
                            <div className="customers">Registered Customers</div>
                            <div className="redemption-value">Value of Redemption</div>
                            <div className="points-redeemed">Points Redeemed</div>
                            <div className="cash-spend">Cash Spend (Debit Card)</div>
                        </div>
                        <div className="summary">Summary</div>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    sideDiv: { marginTop: "100px", marginLeft: "20px" },
    sideDivLink: { marginBottom: "20px"},
    searchButton: { height: "30px", borderRadius: "5px",}
}

export default Home;