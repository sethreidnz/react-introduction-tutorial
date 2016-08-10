# Component Props

```
git checkout step-5
```

Components have what are called `props` which is how you can pass state around between your components. They look a lot like HTML attributes but are camel case
instead of snake case. For example:

``` javascript

<MyComponent myProp="hello!"></MyComponent>

```

There are a few ways you can create components. Below is how you use props in the common ones.

**Using a class based component**

``` javascript

import React, { Component } from 'react'

class App extends Component {
    render()  {
      return (
        <div>
            {this.props.myProp}
        </div>
      )
    }
}

export default App
```
**Using a pure function taking props as an argument **

``` javascript
const MyComponent = (props) => (
    <div>
        {props.myProp}
    </div>
)
```

**Using a pure function and using deconstructing on the props argument to get `myProp`**

```
const MyComponent = ({myProp}) => (
    <div>
        {myProp}
    </div>
)
```

**same again with more than one prop key**

```
const MyComponent = ({myProp, myOtherProp}) => (
    <div>
        {myProp} - {myOtherProp}
    </div>
)

```

As you can see above you can render values from variables by putting them inside `{}`'s using the same syntax as
[Template Literals in ES2015](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals). 
This can be seen in the above examples and in our app in the `EmployeeListItem` component:

``` javascript

const EmployeeListItem = ({employee}) => (
    <li className="collection-item avatar">
        <img src={employee.avatar} alt={employee.name} className="circle" />
        <span className="title">{employee.firstName} {employee.lastName}</span>
        <p>{employee.role} <br/>
        {employee.team}
        </p>
        <a href="#" className="secondary-content btn black">
            <i className="material-icons left">description</i>
            View C.V.
        </a>
    </li>
)

```

## PropTypes

```
git checkout step-5-1
```

React has a utility called `PropTypes` which can be used to define what a component expects to get as `props`. This can be JavaScript primitives like `string, object, number`
or they can be 'shapes' which are constructed using object literals and the function `PropTypes.shapeOf()`. You can also make props required using `isRequire()`. This tutorial 
won't go into great detail on PropTypes but they are very powerful and word pointing out.

You can add PropTypes to any kind of component (function component, class component etc). This is how I have added it to my `EmployeeListItem` component:

``` javascript
import React, { PropTypes } from 'react'

const EmployeeListItem = ({employee}) => (
    <li className="collection-item avatar">
        <img src={employee.avatar} alt={employee.name} className="circle" />
        <span className="title">{employee.firstName} {employee.lastName}</span>
        <p>{employee.role} <br/>
        {employee.team}
        </p>
        <a href="#" className="secondary-content btn black">
            <i className="material-icons left">description</i>
            View C.V.
        </a>
    </li>
)

EmployeeListItem.propTypes = { 
    employee: PropTypes.shape({
        id: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        team: PropTypes.string.isRequired,
        biography: PropTypes.string.isRequired,
        keySkills: PropTypes.arrayOf(React.PropTypes.shape({
            name: PropTypes.string.isRequired
        })),
        recentProjects: PropTypes.arrayOf(React.PropTypes.shape({
            name: PropTypes.string.isRequired
        }))
    })
}

export default EmployeeListItem
```

In this example I have said that there will be an `object` and I have also defined that is required. If the 
component doesn't receive the prop or its the wrong type/shape then an error will show in the browser console.

## Passing the props in

In the `src/App.js` file I have added a line to import a mock API for getting my employee data. We can pass the employee data down
through props like this:

``` javascript
<ul className="collection">
    <EmployeeListItem employee={employees[0]} />
</ul>
```

## Multiple Locations

In `step-5` I was only showing one employee, in `step-5-1` I have made use of the ES2015 `array.map()` function
to loop through each item in the employee and render an `EmployeeListItem`.

``` javascript
<ul className="collection">
    {employees.map((employee) => {
    return <EmployeeListItem key={employee.id} employee={employee} />
    })}
</ul>
```

Notice how I have added a `key` prop to the `EmployeeListItem` component. This is an internal React requirement that allows it to
more efficiently track changes in the state of your application. It just needs to be a unique identifier for each
item in the collection.

Next step - [Nesting Components](06-Nesting-Components.md)