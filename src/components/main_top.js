import React, {Component} from 'react';

class Maintop extends Component
{
    constructor(props){
        super(props);
        let d = new Date()
        let tm = `Today: ${d.getDate()} ${d.toString().substr(4,4)} `
        this.state = {
            title: this.props.screen,
            dateToggle: tm,
            temp: tm,
        }
    }

    _onclick = () => {
        document.getElementById("date-mydropdown").classList.toggle("show");
    }

    _dateToggle = async (dateToggle, event=0) => {

        if (event){
            let dp = document.getElementsByClassName("date-picked")
            for (var i = 0; i < dp.length; i++){
                if (dp[i].classList.contains("date-picked"))
                    dp[i].classList.remove("date-picked")
            }
            event.target.classList.toggle("date-picked")
            event.preventDefault()
            
        
        }
        let d = new Date()
        if (dateToggle === "Today")
            dateToggle = `Today: ${d.getDate()} ${d.toString().substr(4,4)}`;
        document.getElementById("date-mydropdown")
        
        this.setState({temp: dateToggle})
    }

    _applyDateToggle = () => {
        let temp = this.state.temp;
        this.setState({dateToggle: temp})
    }

    _cancelDateToggle = () => {
        //
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
                            <p className="date-picked" onClick={(event) => this._dateToggle("Today",event)}>Today</p>
                            <p onClick={(event) => this._dateToggle("Yesterday", event)}>Yesterday</p>
                            <p onClick={(event) => this._dateToggle("Last 7 Days", event)}>Last 7 Days</p>
                            <p onClick={(event) =>  this._dateToggle("Last 30 Days", event)}>Last 30 Days</p>
                            <p onClick={(event) => this._dateToggle("This Month", event)}>This Month</p>
                            <p onClick={(event) => this._dateToggle("Last Month", event)}>Last Month</p>
                            <p onClick={(event) => this._dateToggle("Custom Range", event)}>Custom Range</p>
                            <div>
                                <button onClick={this._applyDateToggle}>Apply</button>
                                <button onClick={this._cancelDateToggle}>Cancel</button>
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