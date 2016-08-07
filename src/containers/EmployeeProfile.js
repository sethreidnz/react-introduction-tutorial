import React, { Component } from 'react'
import getEmployee from '../api/employees'

class EmployeeProfile extends Component {
    constructor(){
        this.state = {
            employee: getEmployee(1)
        }
    }
    render(){
        return (
            <div>
            </div>
        )
    }
}

export default EmployeeProfile