import React, { Component } from 'react';
import './home.css';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';

class Home extends Component{
    d = new Date()
    
    componentDidMount() {
        let cv = ["canvas1", "canvas2", "canvas3", "canvas4"];
        let col = ["rgb(226, 17, 17)", "rgb(96, 226, 113)", "rgb(65, 156, 144)", "rgb(141, 18, 145)"]
        
        // for (let i = 0; i < cv.length; ++i){
        //     let ctx = document.getElementById(cv[i]);
        //     ctx = ctx.getContext("2d");
        //     ctx.beginPath();
        //     ctx.moveTo(20, 100)
        //     ctx.quadraticCurveTo(40, 100, 40, 90);
        //     ctx.quadraticCurveTo(40, 80, 50, 80);
        //     ctx.lineTo(65, 105);
        //     ctx.quadraticCurveTo(75, 110, 120, 60)
        //     ctx.quadraticCurveTo(140, 65, 140, 100)
        //     ctx.quadraticCurveTo(140, 160, 200, 120)
        //     ctx.strokeStyle = col[i];
        //     ctx.lineWidth = 3;
        //     ctx.stroke();
        // }
        
        // let sumcv = document.getElementById("summary-canvas");
        // let ctx = sumcv.getContext("2d");
        // ctx.beginPath();
        // ctx.moveTo(0, 80)
        // ctx.lineTo(100, 0);
        // ctx.lineTo(200, 50);
        // ctx.lineTo(300, 10);
        // ctx.moveTo(300, 10);
        // ctx.lineTo(400, 100);
        // ctx.lineTo(500, 120);
        // ctx.lineTo(586, 25);
        // ctx.fillStyle="red";
        // ctx.fill()
        // ctx.strokeStyle =  "grey"
        // ctx.stroke();
    }


    render(){
        return(
            <div>
                <Header />
                <Sidebar />
                <div className="main">
                    <div className="main-top">
                        <div className="heading">Dashboard</div>
                        <div className="date-style">
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
                                <div className="charts">
                                    <canvas className="canvas" id="canvas1" ref="canvas1"/>

                                </div>
                            </div>
                            <div className="redemption-value ">
                                <div className="values">1,234</div>
                                <div className="description">Value of Redemption</div>
                                <div className="charts">
                                    <canvas className="canvas" id="canvas2" ref="canvas2"/>
                                </div>
                            </div>
                            <div className="points-redeemed">
                                <div className="values">3,456</div>
                                <div className="description">Points Redeemed</div>
                                <div className="charts">
                                    <canvas className="canvas" id="canvas3" ref="canvas3"/>
                                </div>
                            </div>
                            <div className="cash-spend">
                                <div className="values">3,456,789</div>
                                <div className="description">Cash Spend(Debit Card)</div>
                                <div className="charts">
                                    <canvas className="canvas" id="canvas4" ref="canvas4"/>
                                </div>
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
                                        let id1 = document.getElementById("#id1")
                                        let id2 = document.getElementById("#id2")
                                        id1.style.color = "white"
                                        id1.style.backgroundColor = "#C82B1D"
                                        id2.style.color = "black"
                                        id2.style.backgroundColor = "white"
                                    }}>
                                    Month
                                    </button>
                                <button 
                                    id={"#id2"}
                                    style={{gridColumn:7, fontSize: "20px", height: "40px", border: "none", borderRadius:"25px", backgroundColor: "white" }}
                                    onClick={()=>{
                                        let id1 = document.getElementById("#id1")
                                        let id2 = document.getElementById("#id2")
                                        id2.style.color="white"
                                        id2.style.backgroundColor = "#C82B1D"
                                        id1.style.color="black"
                                        id1.style.backgroundColor = "white"
                                    }}
                                    >
                                    All Time
                                </button>
                            </div>
                            <div className="sum-disp">
                                <div className="sum-disp-1" >
                                    <div className="summary-key">Lorem Ipsum</div>
                                    <div className="summary-value">123456789</div>
                                </div>
                                <div className="sum-disp-2" >
                                    <div className="summary-key">Lorem Ipsum</div>
                                    <div className="summary-value">123456789</div>
                                </div>
                            </div>
                            <div className="sum-disp" >
                                <div className="sum-disp-1" >
                                    <div className="summary-key">Lorem Ipsum</div>
                                    <div className="summary-value">123456789</div>
                                </div>
                                <div className="sum-disp-2" >
                                    <div className="summary-key">Lorem Ipsum</div>
                                    <div className="summary-value">123456789</div>
                                </div>
                            </div>
                            <div className="summary-chart">
                                <canvas width={"680"} id="summary-canvas" ref="summarycanvas" style={{paddingTop: "50px"}}></canvas></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;