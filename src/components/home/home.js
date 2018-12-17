import React, { Component } from 'react';
import './home.css';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';

class Home extends Component{
    d = new Date()
    
    render(){
        return(
            <div>
                <Header />
                <Sidebar />
                <div className="main">
                    <div className="main-top">
                        <div className="heading">Dashboard</div>
                        <div >
                            <select className="date-section">
                                <option value="1">Today: {this.d.getDate()} {this.d.toString().substr(4,4)}</option>
                                <option value="2">Yesterday</option>
                                <option value="3">Last 7 Days</option>
                                <option value="4">Last 30 Days</option>
                                <option value="5">This Month</option>
                                <option value="6">Last Month</option>
                                <option value="7">Custom Range</option>
                            </select>
                        </div>
                        <div className="search">
                            <span className="fa fa-search"></span>
                            <input type="search" style={{fontSize: 18}} placeholder="Search" />
                        </div>
                    </div>
                    <div className="main-below">
                        <div className="section-1">
                            <div className="customers">
                                <div className="values">1,234</div>
                                <div className="description">Registered Customers</div>
                                <div className="charts"></div>
                            </div>
                            <div className="redemption-value">
                            <div className="values">1,234</div>
                                <div className="description">Value of Redemption</div>
                                <div className="charts"></div>
                            </div>
                            <div className="points-redeemed">
                            <div className="values">3,456</div>
                                <div className="description">Points Redeemed</div>
                                <div className="charts"></div>
                            </div>
                            <div className="cash-spend">
                                <div className="values">3,456,789</div>
                                <div className="description">Cash Spend(Debit Card)</div>
                                <div className="charts"></div>                            
                            </div>
                        </div>
                        <div className="summary">
                            <div className="summary-heading">
                                <div style={{ gridColumn: 0, fontSize: "20px", fontWeight: "bold"}}>Summary</div>
                                <button 
                                    id={"#id1"}
                                    type={"button"}
                                    style={{ gridColumn: 6, fontSize: "20px", height: "40px", color: "white", borderRadius:"25px", border: "none", backgroundColor: "#C82B1D"}}
                                    onClick={()=>{
                                        let month1 = document.getElementById("#id1")
                                        let month2 = document.getElementById("#id2")
                                        month1.style.color = "white"
                                        month1.style.backgroundColor = "#C82B1D"
                                        month2.style.color = "black"
                                        month2.style.backgroundColor = "white"
                                    }}>
                                    Month
                                    </button>
                                <button 
                                    id={"#id2"}
                                    style={{gridColumn:7, fontSize: "20px", height: "40px", border: "none", borderRadius:"25px", backgroundColor: "white" }}
                                    onClick={()=>{
                                        let month1 = document.getElementById("#id1")
                                        let month2 = document.getElementById("#id2")
                                        month2.style.color="white"
                                        month2.style.backgroundColor = "#C82B1D"
                                        month1.style.color="black"
                                        month1.style.backgroundColor = "white"
                                    }}
                                    >
                                    All Time
                                </button>
                            </div>
                            <div style={{ display: "grid", margin: "5%" }}>
                                <div style={{ gridColumn: 1}}>
                                    <div className="summary-key">Lorem Ipsum</div>
                                    <div className="summary-value">123456789</div>
                                </div>
                                <div style={{ gridColumn: 4}}>
                                    <div className="summary-key">Lorem Ipsum</div>
                                    <div className="summary-value">123456789</div>
                                </div>
                            </div>
                            <div style={{ display: "grid", margin: "5%"}}>
                                <div style={{ gridColumn: 1}}>
                                    <div className="summary-key">Lorem Ipsum</div>
                                    <div className="summary-value">123456789</div>
                                </div>
                                <div style={{ gridColumn: 4}}>
                                    <div className="summary-key">Lorem Ipsum</div>
                                    <div className="summary-value">123456789</div>
                                </div>
                            </div>
                            <div className="summary-chart"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;