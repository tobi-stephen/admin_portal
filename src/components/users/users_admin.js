import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import './users.css';

class AdminUser extends Component {
    render() {
        return(
            <div>
                <Header />
                <Sidebar />
                <div  className="main">
                    <div className="main-top">
                        <div className="heading">Admin User</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminUser;