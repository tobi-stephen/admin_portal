import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import './users.css';

class AdminUser extends Component {

    constructor(){
        super();
        this.listAdminUsers = this.listAdminUsers.bind(this);
    }

    listAdminUsers = () => {
        let userList = [];
        for (let i = 0; i < 15; i++){
            userList.push(
                <div className="settings-content admin-user">
                    <div>abcdefg@yahoo.com</div>
                    <div>Super Admin</div>
                    <div>{(new Date()).toLocaleString()}</div>
                    <div>{(new Date("October 21 2017")).toLocaleDateString()}</div>
                    <div>Online</div>
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
                        <div className="heading">Admin User</div>
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
                    {/* <div style={{ marginRight: "10px" }}>
                        <div className="settings-title admin-user">
                            <div>Email</div>
                            <div>Role</div>
                            <div>Current Sign In</div>
                            <div>Last Sign At</div>
                            <div>Status</div>
                        </div>
                        {this.listAdminUsers()}
                        
                    </div> */}
                    <div className="settings">
                        <table style={{width:"100%"}}>
                            <tr>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Current Sign In</th>
                                <th>Last Sign At</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                            <tr className="bordered">
                                <td>abcefgh@yahoo.ng</td>
                                <td>Super Admin</td>
                                <td>{this.d.toUTCString().substr(5, 17)}</td>
                                <td>{this.d.toUTCString().substr(5, 17)}</td>
                                <td><i style={{color:"green"}} className="fa fa-circle"></i> Active</td>
                                <td><i className="fa fa-ellipsis-h"></i></td>
                            </tr>
                            <br />
                            <tr className="bordered">
                                <td>oluwatayo.alofun@interswitchgroup.ng</td>
                                <td>Super Admin</td>
                                <td>{this.d.toUTCString().substr(5, 17)}</td>
                                <td>{this.d.toUTCString().substr(5, 17)}</td>
                                <td><i style={{color:"red"}} className="fa fa-circle"></i> Inactive</td>
                                <td><i className="fa fa-ellipsis-h"></i></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminUser;