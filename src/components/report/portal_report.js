import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';

class PortalReport extends Component {

    constructor() {
        super();
        this.listUsers = this.listUsers.bind(this);
    }

    listUsers = () => {
        let userList = [];
        for (let i = 0; i < 15; i++){
            userList.push(
                <div className="settings-content users-content">
                    <div>10</div>
                    <div>Remilekun</div>
                    <div>Remilekun</div>
                    <div>abcdefg@yahoo.com</div>
                    <div>09023445543</div>
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
                        <div className="heading">{"Registered Customers"}</div>
                        <div className="date-section">
                            Time
                        </div>
                        <div className="search">
                            <form onSubmit={null}>
                                <input type="text" placeHolder="Search" />
                                <button type="submit" className="search-button"><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                    <div style={{ marginRight: "10px" }}>
                        <div className="settings-title users-title">
                            <div>ID</div>
                            <div>First Name</div>
                            <div>Last Name</div>
                            <div>Email</div>
                            <div>Phone</div>
                            <div>Last Login Date</div>
                        </div>
                        {this.listUsers()}
                        
                    </div>
                </div>
                
            </div>
        )
    }
}

export default PortalReport;