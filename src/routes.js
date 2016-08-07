import React from 'react'
import { Router, Route, IndexRoute, browserHistory  } from 'react-router'

// Main App Container
import App from './App'

import EmployeeDashboard from './containers/EmployeeDashboard'
import EmployeeProfile from './containers/EmployeeProfile'

const Routes = () => (
    <Router history={browserHistory }>
        <Route path='/' component={App}>
            <IndexRoute component={EmployeeDashboard} />
            <Route path='/dashboard' component={EmployeeDashboard} />
            <Route path='/dashboard/:id' component={EmployeeProfile} />
        </Route>
    </Router>
)

export default Routes