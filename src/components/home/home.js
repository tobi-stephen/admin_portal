import React, { Component } from 'react';
import './home.css';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';

class Home extends Component{
    render(){
        return(
            <div>
                <Header />
                <Sidebar />
                <div className="main">
                    <div className="main-top">
                        <div className="heading">Dashboard</div>
                        <div >
                            <select className="date-section">
                                <option value="1">Today</option>
                                <option value="2">Yesterday</option>
                                <option value="3">Last 7 Days</option>
                                <option value="4">Last 30 Days</option>
                                <option value="5">This Month</option>
                                <option value="6">Last Month</option>
                                <option value="7">Custom Range</option>
                            </select>
                        </div>
                        <div className="search">
                            <span className="fa fa-search"></span>
                            <input type="search" placeholder="Search" />
                        </div>
                    </div>
                    <div className="main-below">
                        <div className="section-1">
                            <div className="customers">Registered Customers</div>
                            <div className="redemption-value">Value of Redemption</div>
                            <div className="points-redeemed">Points Redeemed</div>
                            <div className="cash-spend">Cash Spend <br/>(Debit Card)</div>
                        </div>
                        <div className="summary">
                            <div style={{ margin: "10px" }}>Summary</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;