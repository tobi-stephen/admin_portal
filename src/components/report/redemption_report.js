import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';

class RedemptionReport extends Component {

    constructor() {
        super();
        this.listReport = this.listReport.bind(this);
    }

    listReport = () => {
        let userList = [];
        for (let i = 0; i < 15; i++){
            userList.push(
                <div className="settings-content users-content">
                    <div>Airtime</div>
                    <div>500</div>
                    <div>100</div>
                    <div>Interswitch</div>
                    <div>Incomplete</div>
                    <div>{new Date("October 21 2017").toLocaleDateString()}</div>
                </div>
            )
        }

        return userList;
    }

    render() {
        return(
            <div>
                <Header />
                <Sidebar />
                <div  className="main">
                    <div className="main-top">
                        <div className="heading">Redemption Report</div>
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
                            <input type="search" placeholder="Search" />
                            <span className="fa fa-search"></span>
                        </div>
                    </div>
                    <div style={{ marginRight: "10px" }}>
                        <div className="settings-title users-title">
                            <div>Product</div>
                            <div>Value(Points)</div>
                            <div>Value(Naira)</div>
                            <div>Portal Partner</div>
                            <div>Status</div>
                            <div>Created At</div>
                        </div>
                        {this.listReport()}
                        
                    </div>
                </div>
                
            </div>
        )
    }
}

export default RedemptionReport;