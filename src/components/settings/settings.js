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
                <div className="main">
                    <div className="main-top">
                        <div className="heading">Settings</div>
                    </div>
                    <div>
                        <div className="settings-title">
                            <div >First Points Conversion Rate</div>
                            <div>Max Bank Account Per User</div>
                            <div>Max UBA Policies Per User</div>
                            <div>Created At</div>
                            <div>Updated At</div>
                        </div>
                        <div className="settings-content">
                            <div>0.2</div>
                            <div>3</div>
                            <div>1</div>
                            <div>{new Date("October 21 2017").toLocaleDateString()}</div>
                            <div>{new Date("October 27 2017").toLocaleDateString()}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Settings;