import React, { PropTypes } from 'react'

const EmployeeList = ({children}) => (
    <div className="employee-list">
        <h3>Current Employees</h3>
        <ul className="collection">
            {children}
        </ul>
    </div>
)

EmployeeList.PropTypes = {
    children: PropTypes.array
}

export default EmployeeList