import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory  } from 'react-router'

// Main app wrapper component
import App from './App';

// Container Views
import LocationList from './containers/LocationList';
import LocationDetail from './containers/LocationDetail';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={LocationList} />
      <Route path="locations" component={LocationList} />
      <Route path="locations/:id" component={LocationDetail} />
    </Route>
  </Router>,
  document.getElementById('root')
);
