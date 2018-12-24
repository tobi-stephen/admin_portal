import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import './users.css';
import Maintop from '../main_top';
import Pagination from '../pagination/pagination';

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
                <div id="main-nav" className="main">
                    <Maintop screen={"Users"}/>
                    <div className="settings">
                        <table style={{width: "100%"}}>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Joined</th>
                                    <th></th>
                                </tr>
                                <tr className="bordered">
                                    <td>10</td>
                                    <td>Remilekun</td>
                                    <td>Chibundu</td>
                                    <td>istwester@yahoo.com</td>
                                    <td>08078123456</td>
                                    <td>{new Date("October 21 2017").toUTCString().substr(5, 11)}</td>
                                    <td><i className="fa fa-ellipsis-h"></i></td>
                                </tr>
                                <tr className="break"><td></td></tr>
                                <tr className="bordered">
                                    <td>10</td>
                                    <td>Remilekun</td>
                                    <td>Chibundu</td>
                                    <td>istwester@yahoo.com</td>
                                    <td>08078123456</td>
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

export default Users;