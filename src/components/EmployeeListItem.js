import React from 'react'

const EmployeeListItem = ({employee}) => (
    <li className='collection-item avatar'>
        <img src={employee.avatar} alt={employee.name} className='circle' />
        <span className='title'>{employee.firstName} {employee.lastName}</span>
        <p>{employee.role} <br />
        {employee.team}
        </p>
        <a href='#' className='secondary-content btn black'>
            <i className='material-icons left'>description</i>
            View C.V.
        </a>
    </li>
)

export default EmployeeListItem
