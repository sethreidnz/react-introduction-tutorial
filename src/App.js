import React, { Component } from 'react'
import './index.css'

class App extends Component {
  render() {
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
            <div className="col s12 m7">
                <h3>Current Employees</h3>
                <ul className="collection">
                  <li className="collection-item avatar">
                      <img src="../src/images/gabriella-boon.png" alt="" className="circle" />
                      <span className="title">Gabriella Boone</span>
                      <p>.NET developer <br/>
                        Modern Apps
                      </p>
                      <a href="#" className="secondary-content btn black"><i className="material-icons left">description</i>View C.V.</a>
                  </li>
                  <li className="collection-item avatar">
                      <img src="../src/images/rowanne-everett.png" alt="" className="circle" />
                      <span className="title">Rowanne Everett</span>
                      <p>CRM consultant <br/>
                        Dynamics
                      </p>
                      <a href="#" className="secondary-content btn black"><i className="material-icons left">description</i>View C.V.</a>
                  </li>
                  <li className="collection-item avatar">
                      <img src="../src/images/heath-kendrick.png" alt="" className="circle" />
                      <span className="title">Heath Kendrick</span>
                      <p>Front-End developer <br/>
                        Modern Apps
                      </p>
                      <a href="#" className="secondary-content btn black"><i className="material-icons left">description</i>View C.V.</a>
                  </li>
                  <li className="collection-item avatar">
                      <img src="../src/images/kathlyn-marley.png" alt="" className="circle" />
                      <span className="title">Kathlyn Marley</span>
                      <p>UX Designer <br/>
                        Digital
                      </p>
                      <a href="#" className="secondary-content btn black"><i className="material-icons left">description</i>View C.V.</a>
                  </li>
                  <li className="collection-item avatar">
                      <img src="../src/images/pete-elliot.png" alt="" className="circle" />
                      <span className="title">Pete Elliot</span>
                      <p>Senior .NET Developer <br/>
                        Modern Apps
                      </p>
                      <a href="#" className="secondary-content btn black"><i className="material-icons left">description</i>View C.V.</a>
                  </li>
                  <li className="collection-item avatar">
                      <img src="../src/images/andy-dawson.png" alt="" className="circle" />
                      <span className="title">Andy Dawson</span>
                      <p>AX Developer <br/>
                        Dynamics
                      </p>
                      <a href="#" className="secondary-content btn black"><i className="material-icons left">description</i>View C.V.</a>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
