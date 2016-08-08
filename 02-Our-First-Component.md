```
git checkout step-2
```

Following on from our last step we have now introduced our first React Component. React applications are built up of a variety of nested Components and their HTML. It is a component oriented UI framework.

Our root basic component looks like this:

``` jsx

import React from 'react'
import ReactDOM from 'react-dom'

// Main app wrapper component
import App from './App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

```
Instead of rendering our `Hello World` content directly in our `ReactDOM.render()` call we have now imported `App` from
our newly created file `App.js`. This file looks like this:

```
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World!
      </div>
    )
  }
}

export default App
```

This is simply a class that extends the React class [Component](https://facebook.github.io/react/docs/component-api.html).
At the top we are importing the React library as well as using the es2015 [destructuring](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
syntax to get a reference the Component class at the same time.

Components are simple classes that have [various life cycle events](https://facebook.github.io/react/docs/component-specs.html) that React calls 
when the state of the application or component changes. The also have a `render()` function which is where you put your JSX that represents 
the HTML and components that make up your app. This must have **only one** root component or DOM node or it will not work.

This component doesn't do much, so in the next step we are going to start bringing in the HTML from the static folder.

