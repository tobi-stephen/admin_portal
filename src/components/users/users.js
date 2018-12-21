import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import './users.css';

class Users extends Component {

    constructor() {
        super();
        this.listUsers = this.listUsers.bind(this);
    }

    listUsers = () => {
        let userList = [];
        for (let i = 0; i < 15; i++){
            userList.push(
                <tr className="bordered">
                    <td>10</td>
                    <td>Remilekun</td>
                    <td>Chibundu</td>
                    <td>istwester@yahoo.com</td>
                    <td>08078123456</td>
                    <td>{new Date("October 21 2017").toUTCString().substr(5, 11)}</td>
                    <td><i className="fa fa-ellipsis-h"></i></td>
                </tr>
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
                        <div className="heading">Users</div>
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
                    <div className="settings">
                        <table style={{width: "100%"}}>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Joined</th>
                                <th></th>
                            </tr>
                            {/* {this.listUsers()} */}
                            <tr className="bordered">
                                <td>10</td>
                                <td>Remilekun</td>
                                <td>Chibundu</td>
                                <td>istwester@yahoo.com</td>
                                <td>08078123456</td>
                                <td>{new Date("October 21 2017").toUTCString().substr(5, 11)}</td>
                                <td><i className="fa fa-ellipsis-h"></i></td>
                            </tr>
                            <br />
                            <tr className="bordered">
                                <td>10</td>
                                <td>Remilekun</td>
                                <td>Chibundu</td>
                                <td>istwester@yahoo.com</td>
                                <td>08078123456</td>
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

export default Users;