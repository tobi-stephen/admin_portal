import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import './partners.css';

class CreatePartner extends Component {
    render(){
        return(
            <div>
                <Header />
                <Sidebar />
                <div className="main">
                    <div className="heading">Create partners</div>
                </div>
            </div>
        )
    }
}

export default CreatePartner;