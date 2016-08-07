import React, { PropTypes } from 'react'

const EmployeeList = ({children}) => {
    return (
        <div className="employee-list">
            <h3>Current Employees</h3>
            <ul >
                {children}
            </ul>
        </div>
    )
}

EmployeeList.propTypes = { 
    children: PropTypes.array
}

export default EmployeeList
