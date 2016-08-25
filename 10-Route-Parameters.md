# Route Parameters

```
git checkouts step-10
```

First things first, I need to create the container component for my employee profile page. I have created
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
we did with the dashboard? We need to use the `route params` to get the `employeeId` from the route and then get the selected employee.

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
of the parameters in the path of the route. In this case we have `employeeId` as a parameter set in the route path `path='employee/:employeeId'`. I am
also modifying the components state.

## Adding the route

Finally I have added this component as a route into my `src/routes.js` file with a param `employeeId` and a full path of `employee/:employeeId`:

``` javascript
const Routes = () => (
    <Router history={browserHistory }>
        <Route path='/' component={App}>
            <IndexRoute component={EmployeeDashboard} />
            <Route path='/dashboard' component={EmployeeDashboard} />
            <Route path='/employee/:employeeId' component={EmployeeProfile} />
        </Route>
    </Router>
)
```

## Component state

Each class based component (not pure functional stateless ones) has its own local isolated state. You can access this state via `this.state`. The correct place to set initial
state is in the constructor as I have in the code example. If you want to change it anywhere else you should use the `this.setState` function and not directly access the state. Application
state is a big topic and this tutorial doesn't really delve into it much, just enough to show you how React works.

In the above example I am setting the state equal to an object that has a key `employee`. I am setting `employee` equal to the result of my call to `getEmployee` using the `employeeId` param
 from the `route params`. In a more serious application you would use a state management system like [Redux](https://github.com/reactjs/redux) to manage this but I am using a mock API to make the example clearer.

Inside my render function I use the object deconstructor to get all the required fields out of `this.state.employee` that was set in the components constructor. This profile 
container should probably be broken up into more components, but we will do that shortly. Have a look at how we can so easily replace all our static content with dynamic content
using plain JavaScript functions like .map and template literals.

``` javascript
const { employee: { firstName, lastName, role, team, biography, avatar, keySkills, recentProjects } } = this.state
```

I deconstruct my employee and its properties our of `this.state`. In the next step I am going to explain a lot more about local
component state.

Next step - [Local Component State](11.Local-Component-State.md)
