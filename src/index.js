import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory  } from 'react-router'

// Main app wrapper component
import App from './App'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
  </Router>,
  document.getElementById('root')
)
