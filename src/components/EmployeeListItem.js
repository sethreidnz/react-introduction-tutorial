import React from 'react'

const EmployeeListItem = () => (
    <li className="collection-item avatar">
        <img src="src/images/gabriella-boon.png" alt="" className="circle" />
        <span className="title">Gabriella Boone</span>
        <p>.NET developer <br/>
        Modern Apps
        </p>
        <a href="gabriella-boon.html" className="secondary-content btn black">
            <i className="material-icons left">description</i>
            View C.V.
        </a>
    </li>
)

export default EmployeeListItem