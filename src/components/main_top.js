import React, {Component} from 'react';

class Maintop extends Component
{
    constructor(props){
        super(props);
        let d = new Date()
        this.state = {
            title: this.props.screen,
            dateToggle: `Today: ${d.getDate()} ${d.toString().substr(4,4)} `
        }
    }

    _onclick = () => {
        document.getElementById("date-mydropdown").classList.toggle("show");
    }

    _dateToggle = async (dateToggle) => {
        let d = new Date()
        if (dateToggle === "Today")
            dateToggle = `Today: ${d.getDate()} ${d.toString().substr(4,4)}`;

        this.setState({dateToggle})
    }

    render(){
        return (
            <div className="main-top">
            {
                this.state.title === "Registered Customers" || this.state.title === "Redemption Report"?
                <div style={{flex: "25%"}} className="heading">{this.state.title}</div>
                :
                <div className="heading">{this.state.title}</div>
            }
                &nbsp;&nbsp;
                <div className="date-style">
                    <div className="date-dropdown">
                        <button onClick={this._onclick} className="date-dropbtn">{this.state.dateToggle} &nbsp; <i className="date-dropbtn fa fa-angle-down"></i></button>
                        <div id="date-mydropdown" className="date-dropdown-content">
                            <p onClick={() => this._dateToggle("Today")}>Today</p>
                            <p onClick={() => this._dateToggle("Yesterday")}>Yesterday</p>
                            <p onClick={() => this._dateToggle("Last 7 Days")}>Last 7 Days</p>
                            <p onClick={() => this._dateToggle("Last 30 Days")}>Last 30 Days</p>
                            <p onClick={() => this._dateToggle("This Month")}>This Month</p>
                            <p onClick={() => this._dateToggle("Last Month")}>Last Month</p>
                            <p onClick={() => this._dateToggle("Custom Range")}>Custom Range</p>
                            <div>
                                <button>Apply</button>
                                <button>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="heading-top-space"></div>
                <div>
                    {
                        this.state.title === "Admin User" ?
                        <button className="create-admin">New Admin User</button>
                        :
                        ""
                    }
                </div>
                <div className="search">
                    <span className="fa fa-search"></span>
                    <input type="search" style={{fontSize: 18}} placeholder="Search" />
                </div>
            </div>
        )
    }
}

export default Maintop;