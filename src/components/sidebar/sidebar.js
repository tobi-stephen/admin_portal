import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-red.png';
import './sidebar.css';

class Sidebar extends Component {

    render(){
    return(
        <div id="sidebar-nav" className="sidebar-nav">
            <div style={styles.sideDiv}>
                <div style={styles.sideDivLink}><Link className="sidebar-link" to={"/home"}><i className="fa fa-dashboard" style={{ color: "#9B9B9B"}}></i>  <span>Dashboard</span></Link></div>
                <div style={styles.sideDivLink} className="dropdown"  onClick={() => {
                    let display = document.getElementById("id1");
                    let icon = document.getElementById("idr1")
            
                    if (display.style.display === "block") {
                        display.style.display =  "none";
                        icon.className = "fa fa-angle-right"
                    } else {
                        display.style.display =   "block";
                        icon.className = "fa fa-angle-down"
                    }
                }}>
                    <Link className="sidebar-link" to={"#"}>
                        <i className="fa fa-file" style={{ color: "#9B9B9B" }}></i>  <span>Content Management</span>
                        <i id="idr1" style={{position: "relative", left: "20%"}} className="fa fa-angle-right"></i>
                    </Link>
                    <div id="id1" className="dropdown-content"><Link className="sub-sidebar-link" to={"/partners"}><span>Merchant Partners</span></Link></div>
                </div>
                
                <div  style={styles.sideDivLink} className="dropdown" onClick={() => {
                    let display = document.getElementById("id2");
                    let icon = document.getElementById("idr2")

                    if (display.style.display === "block") {
                        display.style.display =  "none";
                        icon.className = "fa fa-angle-right"
                        document.getElementById("id3").style.display = "none";
                    } else {
                        display.style.display =  "block";
                        icon.className = "fa fa-angle-down"
                        document.getElementById("id3").style.display = "block";
                    }
                }}>
                    
                        <Link className="sidebar-link" to={"#"}>
                            <i className="fa fa-user" style={{ color: "#9B9B9B"}}></i>  <span>User Management</span>
                            <i id="idr2" style={{position: "relative", left: "40%"}} className="fa fa-angle-right"></i>
                        </Link>
                            <div id="id2" className="dropdown-content">
                                <Link className="sub-sidebar-link" to={"/users"}><span>Users</span></Link>
                            </div>
                            <div id="id3" className="dropdown-content">
                                <Link className="sub-sidebar-link" to={"/admin_users"}><span>Admin Users</span></Link>
                            </div>
                </div>
                <br/>
                <div style={styles.sideDivLink} className="dropdown" onClick={() => {
                    let display = document.getElementById("id4");
                    let icon = document.getElementById("idr3")

                    if (display.style.display === "block") {
                        display.style.display =  "none";
                        icon.className = "fa fa-angle-right"
                        document.getElementById("id5").style.display = "none";
                        document.getElementById("id6").style.display = "none";
                    } else {
                        display.style.display =  "block";
                        icon.className = "fa fa-angle-down"
                        document.getElementById("id5").style.display = "block";
                        document.getElementById("id6").style.display = "block";                    
                    }
                }}>
                    <Link className="sidebar-link" to={"#"}>
                        <i className="fa fa-heartbeat" style={{ color: "#9B9B9B"}}></i> <span>Reporting</span>
                        <i id="idr3" style={{position: "relative", left: "135px"}} className="fa fa-angle-right"></i>
                    </Link>
                    <div id="id4" className="dropdown-content"><Link className="sub-sidebar-link" to={"/portal_report"}><span>Portal Report</span></Link></div>
                    <div id="id5" className="dropdown-content"><Link className="sub-sidebar-link" to={"/redemption_report"}><span>Redemption Report</span></Link></div>
                    <div id="id6" className="dropdown-content"><Link className="sub-sidebar-link" to={"/bi_report"}><span>BI</span></Link></div>
                </div>
                <div style={styles.sideDivLink}><Link className="sidebar-link" to={"/settings"}><span><i className="fa fa-cog" style={{ color: "#9B9B9B"}}></i>  System Settings</span></Link></div>
                <div  className="sidebar-bottom sidebar-link">
                    <div><img alt="UBA" src={logo} className="uba-logo"/></div>
                    <span>Copyright 2018 UBA Group PLC.</span>
                    <br/>
                    <span >Powered by <a style={{fontSize: "17px", textDecorationLine: "none", color: "red"}} href={"https://www.interswitchgroup.com/"} >Interswitch</a></span>
                </div>
            </div>
        </div>
    )
}
}

const styles = {
    sideDivLink: { fontSize: "17px", marginBottom: "20px"},
}

export default Sidebar;