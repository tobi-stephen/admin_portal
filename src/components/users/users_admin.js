import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import './users.css';
import Maintop from '../main_top';
import Pagination from '../pagination/pagination';

class AdminUser extends Component {

    d = new Date()

    render() {
        return(
            <div>
                <Header />
                <Sidebar />
                <div id="main-nav" className="main">
                    <Maintop screen={"Admin User"} />
                    <div className="settings">
                        <table style={{width:"100%"}}>
                            <tbody>
                                <tr>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Current Sign In</th>
                                    <th>Last Sign At</th>
                                    <th>Status</th>
                                    <th>&nbsp;</th>
                                </tr>
                                <tr className="bordered">
                                    <td>abcefgh@yahoo.ng</td>
                                    <td>Super Admin</td>
                                    <td>{this.d.toUTCString().substr(5, 17)}</td>
                                    <td>{this.d.toUTCString().substr(5, 17)}</td>
                                    <td><i style={{color:"green"}} className="fa fa-circle"></i> Active</td>
                                    <td><i className="fa fa-ellipsis-h"></i></td>
                                </tr>
                                <tr className="break"><td></td></tr>
                                <tr className="bordered">
                                    <td>oluwatayo.alofun@interswitchgroup.ng</td>
                                    <td>Super Admin</td>
                                    <td>{this.d.toUTCString().substr(5, 17)}</td>
                                    <td>{this.d.toUTCString().substr(5, 17)}</td>
                                    <td><i style={{color:"red"}} className="fa fa-circle"></i> Inactive</td>
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

export default AdminUser;