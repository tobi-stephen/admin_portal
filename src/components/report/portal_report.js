import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import Maintop from '../main_top';
import Pagination from '../pagination/pagination';

class PortalReport extends Component {


    d = new Date()
    render() {
        
        return(
            <div>
                <Header />
                <Sidebar />
                <div id="main-nav" className="main">
                    <Maintop screen={"Registered Customers"} />
                    <div style={{marginTop: "2%"}}>
                        <table style={{width:"100%"}}>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Last Login Date</th>
                                    <th><i className="fa fa-angle-up"></i></th>
                                </tr>
                                <tr className="bordered" style={{height: "100%", paddingBottom: "20px"}}>
                                    <td>10</td>
                                    <td>Remilekun</td>
                                    <td>Adelakun</td>
                                    <td>abcdefg@yahoo.com</td>
                                    <td>090123456789</td>
                                    <td>{new Date("October 21 2017").toUTCString().substr(5, 11)}</td>
                                    <td><i className="fa fa-ellipsis-h"></i></td>
                                </tr>
                                {/* <br /> */}
                                <tr className="bordered" style={{height: "100%", paddingBottom: "15px"}}>
                                    <td>10</td>
                                    <td>Remilekun</td>
                                    <td>Adelakun</td>
                                    <td>abcdefg@yahoo.com</td>
                                    <td>090123456789</td>
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

export default PortalReport;