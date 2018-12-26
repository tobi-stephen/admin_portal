import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import Maintop from '../main_top';
import Pagination from '../pagination/pagination';

class RedemptionReport extends Component {


    render() {
        return(
            <div>
                <Header />
                <Sidebar />
                <div id="main-nav" className="main">
                    <Maintop screen={"Redemption Report"} />
                    <div className="settings">
                        <table style={{ width:"100%" }}>
                            <tbody>
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
                                <tr className="break"><td></td></tr>
                                <tr className="bordered">
                                    <td>Airtime</td>
                                    <td>500</td>
                                    <td>100</td>
                                    <td>Interswitch</td>
                                    <td>Incomplete</td>
                                    <td>{new Date("October 21 2017").toUTCString().substr(5, 11)}</td>
                                    <td><i className="fa fa-ellipsis-h"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                <Pagination />
                </div>
            </div>
        )
    }
}

export default RedemptionReport;