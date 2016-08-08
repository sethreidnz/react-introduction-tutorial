```
git checkouts step-10
```

First things first I need to create the container component for my employee profile page. I have created
the file `src/containers/EmployeeProfile`. My bare bones `EmployeeProfile` looks like this:

``` javascript
import React, { Component } from 'react'

class EmployeeProfile extends Component {
    render(){
        return (
            <div>
            </div>
        )
    }
}

export default EmployeeProfile
```

Now lets bring in the html from the static version:

```
git checkout step-10-1
```

I have now added the HTML from the static version (updated to work with JSX). Now how do we make this a dynamic view like
we did with the dashbaord? We need to use the route params to get the `employeeId` from the route and then get the select employee.

## Route Params

```
git checkout step-10-2
```

If you look at `src/containers/EmployeeProfile` you will see I have imported a `getEmployee` function (a syncronous mock api function)
as well as added a constructor to the Component class.

``` javascript
constructor({params}){
    super()
    const employee = getEmployee(params.employeeId)
    this.state = {
        employee: employee
    }
}
```

Here I am getting the `params` object from the props passed into the component. This params is an object hash representation
of the parameters in the path of the route. In this case we have `employeeId` as a paraemeter set in the route pate `path='employee/:employeeId'`. I am
also modifying the components state.

## Component state

Each class based component (not pure functional stateless ones) has its own local isolated state. You can access this state via `this.state`. The correct place to set initial
state is as I have in the contructor. If you want to change it anwhere else you should use the `this.setState` function and not directly access to the state. application
state is a big topic and this tutorial doesn't really delve into it much, just enough to show you how React works.

In the above example I am setting the state equal to an object that has a key `employee`. I am seeting `employee` equal to the result of my call to `getEmployee` using the `employeeId` param
 from the route params. In a more serious application you would use a state management system like [Redux](https://github.com/reactjs/redux) to manage this but I am using a mock API to make the example clearer.

Inside my render function I use the object deconstructor to get all the required fields out of `this.state.employee` that was set in the components contructor. This profile 
container should probably be broken up into more components, but we will do that shortly. Have a look at how we can so easily replace all our static content with dynamic content
using plain JavaScript functions like .map and template literals.

```
import React, { Component } from 'react'
import { getEmployee } from '../api/employees'

class EmployeeProfile extends Component {
    constructor({params}){
        super()
        const employee = getEmployee(params.employeeId)
        this.state = {
            employee: employee
        }
    }
    render(){
        const { employee: { firstName, lastName, role, team, biography, avatar, keySkills, recentProjects } } = this.state
        debugger
        return (
            <div>
                <div className="col s12 m4">
                    <div className="row">
                        <div className="profile">
                            <div className="col s12 m6 profile-picture">
                                <img src={avatar} alt="" />
                            </div>
                            <div className="col s12 m6 profile-details">
                                <h5 className="profile-name">{firstName} {lastName}</h5>
                                <label>Role</label>
                                <span className="profile-role">{role}</span>
                                <label>Team</label>
                                <span className="profile-team">{team}</span>
                            </div>
                        </div>           
                    </div>
                    <div className="row">
                        <div className="profile">
                            <div className="col s12 m12 profile-details">
                                <h5 className="profile-name">Key Skills and Technologies</h5>
                                <ul className="collection">
                                    {keySkills.map((skill) => (
                                        <li className="collection-item">{skill.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>           
                    </div>
            </div>
            <div className="col s12 m8">
                <h5>Biography</h5>
                <p>
                    {biography}
                </p>
                <h5>Recent Projects</h5>
                <ul className="collection">
                    {recentProjects.map((project) => (
                        <li className="collection-item">{project.name}</li>
                    ))}
                </ul>
            </div>
        </div>
        )
    }
}

export default EmployeeProfile
```

Lets break this down into small components in the [next section]()