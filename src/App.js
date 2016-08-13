import React, { Component } from 'react'
import employees from './api/employees'
import './index.css'

// Components
import EmployeeList from './components/EmployeeList'
import EmployeeListItem from './components/EmployeeListItem'

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
            <EmployeeList>
             {employees.map((employee) => {
                return <EmployeeListItem key={employee.id} employee={employee} />
              })}
            </EmployeeList>
        </div>
      </div>
    </div>
      </div>
    )
  }
}

export default App
