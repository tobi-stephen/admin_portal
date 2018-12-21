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
                        <form className="partner-form" onSubmit={null}>
                            
                            <div>
                                <label for="name">NAME *</label>
                                <input type="text" id="name" required></input>
                            </div>
                                
                            <div >
                                <label for="address">ADDRESS *</label>
                                <input type="text" id="address" required></input>
                            </div>

                            <div>
                                <label for="email">EMAIL</label>
                                <input type="text" id="email"></input>
                            </div>

                            <div>
                                <label for="phone">PHONE *</label>
                                <input type="text" id="phone" required></input>
                            </div>

                            <div>
                                <label for="info">ADDITIONAL INFO</label>
                                <input type="text" id="info"></input>
                            </div>

                            <div>
                                <label for="image">IMAGE (SIZE: 400 X 400 PIXELS) *</label>
                                <input type="file" accept="image/*" id="image" required></input>
                            </div>

                            <div>
                                <label for="website">WEBSITE</label>
                                <input type="text" id="website"></input>
                            </div>
                            {/* <div></div> */}
                            <div >
                                <div style={{float: "left"}}>
                                    <input type="checkbox" name="active" value="Active"/>Active 
                                </div>
                                <div style={{float: "left"}}>
                                    <input type="checkbox" name="featured" value="Featured"/>Featured
                                </div>
                                <div style={{ float: "left"}}>
                                    <input type="checkbox" name="home_delivery" value="Does home delivery"/>Does home delivery
                                </div>
                            </div>
                            <div className="partner-action">
                                <div className="submit-create">
                                    <input className="submit"  type="submit" value="Create Discount Partner" />
                                </div>
                                <div className="cancel-create" >
                                    <input className="cancel" type="button" value="Cancel"/>
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