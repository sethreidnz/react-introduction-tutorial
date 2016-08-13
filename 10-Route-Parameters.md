# Route Parameters

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
we did with the dashboard? We need to use the `route params` to get the `employeeId` from the route and then get the select employee.

## Route Params

```
git checkout step-10-2
```

If you look at `src/containers/EmployeeProfile` you will see I have imported a `getEmployee` function (a synchronous mock API function)
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
of the parameters in the path of the route. In this case we have `employeeId` as a parameter set in the route pate `path='employee/:employeeId'`.

I use this employeeId to retrieve the employee we are displaying and then I then set the initial state of the component to include that employee. This is a very simplistic
way of managing state in your application using the components local state. I can then access this in my render function using:

``` javascript
const { employee: { firstName, lastName, role, team, biography, avatar, keySkills, recentProjects } } = this.state
```

I deconstruct my employee and its properties our of `this.state`. In the next step I am going to explain a lot more about local
component state.

Next step - [Local Component State](11.Local-Component-State.md)