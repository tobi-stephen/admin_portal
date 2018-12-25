import React, {Component} from 'react';
import './main_top.css';

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
            start: "",
            stop: "",
        }
    }

    _onclick = () => {
        document.getElementById("date-mydropdown").classList.toggle("show");
    }

    componentDidMount() {

        //Display hack for the custom range date
        let cr = document.getElementById("custom-range-content").childNodes;
        for (let i = 0; i < cr.length; i++){
            cr[i].style.display = "none";
        }
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
        
        document.getElementById("date-mydropdown")
        
        this.setState({temp: dateToggle})
        if (dateToggle === "Custom Range"){
            let cr = document.getElementById("custom-range-content").childNodes;
            for (let i = 0; i < cr.length; i++){
                if (cr[i].style.display !== "block")
                    cr[i].style.display = "block";
                else 
                    cr[i].style.display = "none";
            }
        }
    }

    _applyDateToggle = () => {

        let cr = document.getElementById("custom-range-content").childNodes;
        for (let i = 0; i < cr.length; i++){
            cr[i].style.display = "none";
        }

        let temp = this.state.temp;
        let d = new Date()
        if (temp === "Today")
            temp = `Today: ${d.getDate()} ${d.toString().substr(4,4)}`;
        if (temp === "Custom Range"){
            console.log(this.state.start)
            let start = "";
            if (this.state.start){
                let d = new Date(this.state.start);
                start = `${d.getDate()} ${d.toString().substr(4,4)}`
            } else {
                alert("Specify a start period")
                return
            }

            let stop = "";
            if (this.state.stop){
                let d = new Date(this.state.stop);
                stop = `${d.getDate()} ${d.toString().substr(4,4)}`;
            } else {
                alert("Specify a stop period")
                return
            }
            
            temp = `Custom Range: ${start} - ${stop}`;
        }
        this.setState({dateToggle: temp})
        console.log(this.state.dateToggle)
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
                            <p className="custom-range" onClick={(event) => this._dateToggle("Custom Range", event)}>Custom Range</p>
                            <div id="custom-range-content" className="custom-range-content">
                                <p>
                                    Start:&nbsp;
                                    <input type="date" max={"2018-12-30"}
                                        onInput={(val) => {
                                            // console.log(val.target.value)
                                            this.setState({start: val.target.value})
                                        }} />
                                </p>
                                <p>
                                    Stop:&nbsp;
                                    <input type="date" max={"2018-12-30"}
                                        onInput={(val) => {
                                            // console.log(val.target.value)
                                            this.setState({stop: val.target.value})
                                        }} />
                                </p>
                            </div>
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