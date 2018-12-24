import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import './partners.css';

class Partners extends Component {
    state = {
        partnerIsAvailable: false
    }


    render(){
        return(
            <div>
                <Header />
                <Sidebar />
                <div  id="main-nav" className="main">
                    <div className="heading">Merchant Partners</div>
                    <div className="partners">
                        {this.state.partnerIsAvailable ? 
                            <div className="yes-partner">
                                There are partners. <Link to={"/create_partner"} className="create-1">Create More</Link>
                            </div> 
                            : 
                            <div className="no-partner">
                                There are no Merchant Partners yet. <Link to={"/create_partner"} className="create-1">Create one</Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Partners;