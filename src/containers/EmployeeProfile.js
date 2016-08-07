import React, { Component } from 'react'
import { getEmployee } from '../api/employees'

class EmployeeProfile extends Component {
    constructor({params}){
        super()
        this.state = {
            employee: getEmployee(params.employeeId)
        }
    }
    render(){
        return (
            <div>
                <div className="col s12 m4">
                    <div className="row">
                        <div className="profile">
                            <div className="col s12 m6 profile-picture">
                                <img src="/src/images/gabriella-boon.png" alt="" />
                            </div>
                            <div className="col s12 m6 profile-details">
                                <h5 className="profile-name">Gabriella Boon</h5>
                                <label>Role</label>
                                <span className="profile-role">.NET developer</span>
                                <label>Team</label>
                                <span className="profile-team">Modern Apps</span>
                            </div>
                        </div>           
                    </div>
                    <div className="row">
                        <div className="profile">
                            <div className="col s12 m12 profile-details">
                                <h5 className="profile-name">Key Skills and Technologies</h5>
                                <ul className="collection">
                                    <li className="collection-item">MCV / WEBAPI</li>
                                    <li className="collection-item">SQL</li>
                                    <li className="collection-item">Epi Server</li>
                                    <li className="collection-item">Azure Configuration</li>
                                    <li className="collection-item">Web Forms</li>
                                    <li className="collection-item">Xamarin</li>
                                </ul>
                            </div>
                        </div>           
                    </div>
            </div>
            <div className="col s12 m8">
                <h5>Biography</h5>
                <p>
                    Gabriella Boon has been a .NET developer since 2011 having build various soultions
                    using ASPNET as well as mobile development using Xamarin. With background mostly
                    in server side development Gabriella is in her element when developing de-coupled
                    services and architecting SQL database solutions.
                </p>
                <h5>Recent Projects</h5>
                <ul className="collection">
                    <li className="collection-item">City Council - Mobility solution</li>
                    <li className="collection-item">Mircosoft - Showcase project</li>
                    <li className="collection-item">Azure SQL database migraiton - On premise to cloud</li>
                    <li className="collection-item">Craig and Smiths - Farming supplies web site</li>
                </ul>
            </div>
        </div>
        )
    }
}

export default EmployeeProfile