import React, { Component } from 'react'

class MainNavigation extends Component{
    constructor(){
        super()
        this.state = {
            sideNavShow: false
        }
        this.toggleSideNav.bind(this)
    }
    toggleSideNav(){
        this.setState({
            sideNavShow: !this.state.sideNavShow
        })
        console.log(`this.sideNavShow: ${this.state.sideNavShow}`)
    }
    render(){
         return (
            <nav>
                <div className="nav-wrapper black">
                    <div className="container">
                        <a href="#!" className="brand-logo">Employee CV Manager</a>
                        <a onClick={() => this.toggleSideNav()} className="button-collapse">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="main-navigation right hide-on-med-and-down">
                            <li className="active"><a href="#">Employees</a></li>
                            <li><a href="#">My Profile</a></li>
                            <li><a href="#">Settings</a></li>
                        </ul>
                        <ul id="MainNavigationCollapse" className="side-nav">
                            <li className="active"><a href="#">Employees</a></li>
                            <li><a href="#">My Profile</a></li>
                            <li><a href="#">Settings</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )    
    }
}

export default MainNavigation