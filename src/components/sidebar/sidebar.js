import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-red.png';
import './sidebar.css';

const Sidebar = ()=> {
    return(
        <div className="sidebar-nav">
            <div style={styles.sideDiv}>
                <div style={styles.sideDivLink}><Link className="sidebar-link" to={"/home"}><span>Dashboard</span></Link></div>
                <div style={styles.sideDivLink} className="dropdown">
                    <Link className="sidebar-link" to={"#"}>Content Management</Link>
                    <div className="dropdown-content"><Link className="sub-sidebar-link" to={"/partners"}><span>Merchant Partners</span></Link></div>
                </div>
                <div style={styles.sideDivLink} className="dropdown">
                    <Link className="sidebar-link" to={"#"}><span>User Management</span></Link>
                    <div className="dropdown-content"><Link className="sub-sidebar-link" to={"/users"}><span>Users</span></Link></div>
                    <div className="dropdown-content"><Link className="sub-sidebar-link" to={"/admin_users"}><span>Admin Users</span></Link></div>
                </div>
                <br/>
                <div style={styles.sideDivLink} className="dropdown">
                    <Link className="sidebar-link" to={"#"}><span>Reporting</span></Link>
                    <div className="dropdown-content"><Link className="sub-sidebar-link" to={"#"}><span>Portal Report</span></Link></div>
                    <div className="dropdown-content"><Link className="sub-sidebar-link" to={"#"}><span>Redemption Report</span></Link></div>
                    <div className="dropdown-content"><Link className="sub-sidebar-link" to={"#"}><span>BI</span></Link></div>
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

const styles = {
    sideDiv: { marginTop: "100px", marginLeft: "20px" },
    sideDivLink: { marginBottom: "20px"},
    searchButton: { height: "30px", borderRadius: "5px",}
}

export default Sidebar;