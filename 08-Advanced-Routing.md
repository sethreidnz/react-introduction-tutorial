```
git checkout step-8
```

Most app have some sort of navigation or some shared UI elements it quite useful to have a root component that acts as an outlet for showing 
different routes.

I've done this in this step by creating a new folder `src/containers` where we put our new `EmployeeDashbaord`
component which is going to be the new container component that will house our employee list component and be
our index route component.

``` javascript
import React, { Component } from 'react'
import employees from '../api/employees'

// Components
import EmployeeList from '../components/EmployeeList'
import EmployeeListItem from '../components/EmployeeListItem'

class EmployeeDashboard extends Component {
  render() {
    return (
      <div className="employee-dashboard">
            <EmployeeList>
             {employees.map((employee) => {
                return <EmployeeListItem key={employee.id} employee={employee} />
              })}
            </EmployeeList>
      </div>
    )
  }
}

export default EmployeeDashboard

```
Just a simple class based component that renderes a `div` with a the `EmployeeList` in it.

Then in routes.js where I have defined my routes.

``` javascript
import React from 'react'
import { Router, Route, IndexRoute, browserHistory  } from 'react-router'

// Main App Container
import App from './App'

import EmployeeDashboard from './containers/EmployeeDashboard'

const Routes = () => (
    <Router history={browserHistory }>
        <Route path='/' component={App}>
            <IndexRoute component={EmployeeDashboard} />
            <Route path='/dashboard' component={EmployeeDashboard} />
        </Route>
    </Router>
)

export default Routes
```

Here we use the nesting of the Route components to describe the heirarchy of our routes. In this case we have main router
that will render our root `App` component. Then as a child Route of this we have a new component `IndexRoute` to 
define our location list route. This IndexRoute component defines the default route if there are no other matches.

I have also included a normal `Route` component for demonstration purposes giving a different path `'/dashbaord'` the the same container component
as the `IndexRoute`.