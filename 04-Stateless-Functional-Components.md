```
git checkout step-2
```

A well established pattern in developing scalable React apps is creating a separation between presentational components and container components. This can be 
thought of also as 'dumb' and 'smart' components.

**Container** components are responsible for things like orchestrating user interaction, initiating and retrieving the data among other view logic related things. 
While **presentation** components are simple pure functions that take the current state and create a rendered representation of it.

If you open up `/src/components/EmployeeListItem.js` you will see the following:

``` javascript
import React from 'react'

const EmployeeListItem = () => (
    <li className="collection-item avatar">
        <img src="src/images/gabriella-boone.png" alt="" className="circle" />
        <span className="title">Gabriella Boone</span>
        <p>.NET developer <br/>
        Modern Apps
        </p>
        <a href="gabriella-boon.html" className="secondary-content btn black">
            <i className="material-icons left">description</i>
            View C.V.
        </a>
    </li>
)

export default EmployeeListItem
```

This is a `stateless functional component` which means it is just a function that returns a component heirarchy to render.
These types of components are pure functions of the current state. In the above example we are just returning some static
markup but using what React calls `props` and you can see more about these in the [next step]() but lets quickly 
look at how we can use this component in our `App` component.


I have replaced the `<li></li>` html in our `App` component so it looks like this:

``` javascript
import React, { Component } from 'react'

// Components
import EmployeeListItem from './components/EmployeeListItem'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
    <div className="nav-wrapper black ">
       <div className="container">
        <a href="/static" className="brand-logo">Employee CV Manager</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li className="active"><a href="#">Employees</a></li>
          <li><a href="#">My Profile</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>
    </div>
  </nav>
    <div className="container main-content">      
     <div className="row">
        <div className="col s12 m7">
            <h3>Current Employees</h3>
            <ul className="collection">
              <EmployeeListItem />
            </ul>
        </div>
      </div>
    </div>
      </div>
    )
  }
}

export default App
```

But we only have one employee now. Lets fix that in the [next step]()