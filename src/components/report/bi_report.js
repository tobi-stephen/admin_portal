import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';

class BIReport extends Component {

    constructor() {
        super();
        this.listReport = this.listReport.bind(this);
    }

    listReport = () => {
        let userList = [];
        for (let i = 0; i < 15; i++){
            userList.push(
                <div className="settings-content users-content">
                    <div style={{minWidth: "80px"}}>Airtime</div>
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
    d = new Date()

    render() {
        return(
            <div>
                <Header />
                <Sidebar />
                <div  className="main">
                    <div className="main-top">
                        <div className="heading">BI Report</div>
                        <div >
                            <select className="date-section">
                                <option value="1">Today: {this.d.getDate()} {this.d.toString().substr(4,4)}</option>
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
                    <div className="settings">
                        <table style={{ width:"100%" }}>
                            <tr>
                                <th>Product</th>
                                <th>Value(Points)</th>
                                <th>Value(Naira)</th>
                                <th>Portal Partner</th>
                                <th>Status</th>
                                <th>Created At</th>
                                <th><i className="fa fa-angle-up"></i></th>
                            </tr>
                            <tr className="bordered">
                                <td>Airtime</td>
                                <td>500</td>
                                <td>100</td>
                                <td>Interswitch</td>
                                <td>Incomplete</td>
                                <td>{new Date("October 21 2017").toUTCString().substr(5, 11)}</td>
                                <td><i className="fa fa-ellipsis-h"></i></td>
                            </tr>
                            <br />
                            <tr className="bordered">
                                <td>Airtime</td>
                                <td>500</td>
                                <td>100</td>
                                <td>Interswitch</td>
                                <td>Incomplete</td>
                                <td>{new Date("October 21 2017").toUTCString().substr(5, 11)}</td>
                                <td><i className="fa fa-ellipsis-h"></i></td>
                            </tr>
                        </table>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default BIReport;