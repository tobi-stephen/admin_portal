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
                        <div className="search">
                            <form onSubmit={null}>
                                <input type="text" placeHolder="Search" />
                                <button type="submit" className="search-button"><i className="fa fa-search"></i></button>
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

export default Home;