import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-red.png';
import './sidebar.css';

class Sidebar extends Component {

    render(){
    return(
        <div className="sidebar-nav">
            <div style={styles.sideDiv}>
                <div style={styles.sideDivLink}><Link className="sidebar-link" to={"/home"}><span>Dashboard</span></Link></div>
                <div style={styles.sideDivLink} className="dropdown"  onClick={() => {
                    let display = document.getElementById("id1");
            
                    if (display.style.display === "none") {
                        display.style.display =  "block";
                    } else {
                        display.style.display =   "none";
                    }
                    console.log(display.style.display)
                }}>
                    <Link className="sidebar-link" to={"#"}>Content Management</Link>
                    <div id="id1" className="dropdown-content"><Link className="sub-sidebar-link" to={"/partners"}><span>Merchant Partners</span></Link></div>
                </div>
                <div  style={styles.sideDivLink} className="dropdown" onClick={() => {
                    let display = document.getElementById("id2");
            
                    if (display.style.display === "block") {
                        display.style.display =  "none";
                        document.getElementById("id3").style.display = "none";
                    } else {
                        display.style.display =  "block";
                        document.getElementById("id3").style.display = "block";
                    }
                }}>
                    
                        <Link className="sidebar-link" to={"#"}><span>User Management</span></Link>
                        <div id="id2" className="dropdown-content"><Link className="sub-sidebar-link" to={"/users"}><span>Users</span></Link></div>
                        <div id="id3" className="dropdown-content"><Link className="sub-sidebar-link" to={"/admin_users"}><span>Admin Users</span></Link></div>
                </div>
                <br/>
                <div style={styles.sideDivLink} className="dropdown" onClick={() => {
                    let display = document.getElementById("id4");
            
                    if (display.style.display === "block") {
                        display.style.display =  "none";
                        document.getElementById("id5").style.display = "none";
                        document.getElementById("id6").style.display = "none";
                    } else {
                        display.style.display =  "block";
                        document.getElementById("id5").style.display = "block";
                        document.getElementById("id6").style.display = "block";                    
                    }
                }}>
                    <Link className="sidebar-link" to={"#"}><span>Reporting</span></Link>
                    <div id="id3">
                        <div id="id4" className="dropdown-content"><Link className="sub-sidebar-link" to={"/portal_report"}><span>Portal Report</span></Link></div>
                        <div id="id5" className="dropdown-content"><Link className="sub-sidebar-link" to={"/redemption_report"}><span>Redemption Report</span></Link></div>
                        <div id="id6" className="dropdown-content"><Link className="sub-sidebar-link" to={"/bi_report"}><span>BI</span></Link></div>
                    </div>
                </div>
                <div style={styles.sideDivLink}><Link className="sidebar-link" to={"/settings"}><span>System Settings</span></Link></div>
                <div style={{ height:"150px" }}></div>
                <div><img alt="UBA" src={logo} className="uba-logo"/></div>
                <div style={styles.sideDivLink}>
                    <span className="sidebar-link">Copyright 2018 UBA Group PLC.</span>
                    <span className="sidebar-link">Powered by IIIIIIIIIIIIIII</span>
                </div>
            </div>
        </div>
    )
}
}

const styles = {
    sideDiv: { marginTop: "100px", marginLeft: "20px" },
    sideDivLink: { marginBottom: "20px"},
    searchButton: { height: "30px", borderRadius: "5px",}
}

export default Sidebar;