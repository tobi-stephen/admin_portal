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
                    <div className="main-top">
                        <div className="heading">Merchant Partners</div>
                    </div>
                    <div className="main-below-p" style={{ marginRight: "50px" }}>
                        <form onSubmit={null}>
                            <div>
                                <label for="name">NAME*</label>
                                <div className="rectangle rectangle-1">
                                    <input className="input-box" type="text" id="name" required></input>
                                </div>
                            </div>
                            
                            <div>
                                <label for="address">ADDRESS*</label>
                                <div className="rectangle rectangle-2">
                                    <input className="input-box" type="text" id="address" required></input>
                                </div>
                            </div>

                            <div>
                                <label for="email">EMAIL</label>
                                <div className="rectangle rectangle-1">
                                    <input className="input-box" type="text" id="email"></input>
                                </div>
                            </div>

                            <div>
                                <label for="phone">PHONE*</label>
                                <div className="rectangle rectangle-1">
                                    <input className="input-box" type="text" id="phone" required></input>
                                </div>
                            </div>

                            <div>
                                <label for="info">ADDITIONAL INFO</label>
                                <div className="rectangle rectangle-1">
                                    <input className="input-box" type="text" id="info"></input>
                                </div>
                            </div>

                            <div>
                                <label for="image">IMAGE (SIZE 400 X 400 PIXELS)*</label>
                                <div className="rectangle rectangle-1">
                                    <input className="input-box" type="text" id="image" required></input>
                                </div>
                            </div>

                            <div>
                                <label for="website">WEBSITE</label>
                                <div className="rectangle rectangle-1">
                                    <input className="input-box" type="text" id="website"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePartner;