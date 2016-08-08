import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const EmployeeListItem = ({employee}) => (
    <li className="collection-item avatar">
        <img src={employee.avatar} alt={employee.name} className="circle" />
        <span className="title">{employee.firstName} {employee.lastName}</span>
        <p>{employee.role} <br/>
        {employee.team}
        </p>
        <Link  to={'/employee/' + employee.id} className="secondary-content btn black">
            <i className="material-icons left">description</i>
                View C.V.
        </Link>
    </li>
)

EmployeeListItem.propTypes = { 
    employee: PropTypes.shape({
        id: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        team: PropTypes.string.isRequired,
        biography: PropTypes.string.isRequired,
        keySkills: PropTypes.arrayOf(React.PropTypes.shape({
            name: PropTypes.string.isRequired
        })),
        recentProjects: PropTypes.arrayOf(React.PropTypes.shape({
            name: PropTypes.string.isRequired
        }))
    })
}


export default EmployeeListItem