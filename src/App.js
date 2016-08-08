import React, { Component } from 'react'
import './index.css'

class App extends Component {
  render() {
    const { children } = this.props
    return (
     <div className="App">
        <nav>
          <div className="nav-wrapper black ">
            <div className="container">
              <a href="/static" className="brand-logo">Employee CV Manager</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li className="active"><a href="#">Employees</a></li>
                <li><a href="#">My Profile</a></li>
                <li><a href="#">Settings</a></li>
              </ul>
            </div>
          </div>
        </nav>
          <div className="container main-content">      
            <div className="row">
                  { children }
            </div>
          </div>
      </div>
    )
  }
}

export default App
