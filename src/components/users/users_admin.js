import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import './users.css';
import Maintop from '../main_top';

class AdminUser extends Component {

    d = new Date()

    render() {
        return(
            <div>
                <Header />
                <Sidebar />
                <div  className="main">
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
                                {/* <br /> */}
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
                </div>
            </div>
        )
    }
}

export default AdminUser;