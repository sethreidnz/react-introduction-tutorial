import React from 'react'
import { Router, Route, browserHistory  } from 'react-router'

// Main App Container
import App from './App'

const Routes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
    </Router>
)

export default Routes