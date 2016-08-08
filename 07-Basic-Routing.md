```
git checkout step-7
```

So far we have only had one page, the list of employees. I need to be able to use the `View C.V.` 
buttons and see the profile of the employee. To do this we need to introduce some sort of routing. 
We could write our own, since React is not a framework its a library it doesn't come bundled with a pre-packaged solution.
But there is alerady a great one called [React Router](https://github.com/reactjs/react-router) that is
widely used and extremely powerful.

The Router that you get in React Router is a component itself. It can take props just like
any other component and it has special props relating to configuring your applications routing.

In this step there is a very basic example of routing with React Router in `src/index.js`:

``` javascript

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory  } from 'react-router'
import App from './App'

ReactDOM.render(
  <Router history={browserHistory }>
    <Route path="/" component={App}/>
  </Router>,
  document.getElementById('root')
)


```

Here we have imported the `Router` component, the `Route` component and `browserHistory` from React Router.
The Router is the root component while the Route component is used to describe each of the routes in your app.
Here we have passed in browserHistory to the Router component which will mean we are using HTML5 history API
URLs. You can also use a hash based url system as well for legacy support.

## The Route component

The route component can take a path (the relative url), a component or a list of named components components
and a number of other properties. It is used to declaratively define route configurations.

## Creating a Route component

```
git checkout step-7-1
```

I could create a new file `src/route.js` and defined a route configuration and exported it as the default export.

``` javascript

import React from 'react'
import { Router, Route, browserHistory  } from 'react-router'

// Main App Container
import App from './App'

const Routes = () => (
    <Router history={browserHistory }>
        <Route path="/" component={App}/>
    </Router>
)

export default Routes

```

