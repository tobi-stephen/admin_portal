import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import './settings.css';

class Settings extends Component {
    render(){
        return(
            <div>
                <Header />
                <Sidebar />
                <div id="main-nav" className="main">
                    <div className="main-top">
                        <div className="heading settings-head">System Settings</div>
                    </div>
                    <div className="settings">
                        <table style={{width:"100%"}}>
                            <tbody>
                                <tr>
                                    <th>First Points Conversion Rate</th>
                                    <th>Max Bank Account Per User</th>
                                    <th>Max UBA Policies Per User</th>
                                    <th>Created At</th>
                                    <th>Updated At</th>
                                    <th>&nbsp;</th>
                                </tr>
                                <tr className="bordered">
                                    <td>0.2</td>
                                    <td>3</td>
                                    <td>1</td>
                                    <td>{new Date("October 21 2017").toUTCString().substr(5, 11)}</td>
                                    <td>{new Date("October 21 2017").toUTCString().substr(5, 11)}</td>
                                    <td><i className="fa fa-ellipsis-v"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Settings;