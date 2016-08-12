# Our First Component

```
git checkout step-2
```

Following on from our last step we have now introduced our first React Component. React applications at their core are just a series of nested Components with one ultimate root component. 
It is a component oriented UI framework.

Our entry point file `index.js` now imports our root component `App` from the new file file `src/App.js`:

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
Instead of rendering our `Hello World` content directly in my `ReactDOM.render()` I am telling ReactDOM to render the `App` component
exported from `src/App.js`. This is our root component and it looks like this:

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

This React component is an ES2015 JavaScript [Class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) that extends the React 
class [Component](https://facebook.github.io/react/docs/component-api.html).At the top we are importing the React library as well as using the ES2015 
[Destructuring Assignment](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) syntax to get a reference
 to the Component class at the same time.

Components are simple classes that have [various life cycle events, properties and functions](https://facebook.github.io/react/docs/component-specs.html) which are exposed by the React 
[Component API](https://facebook.github.io/react/docs/component-api.html). In this example I am making use of the `render()`. From the [React Docs]() about render():

> The `render()` method is required., When called, it should examine this.props and this.state and return a single child element.

For clarity `this.state` represents the local state of the component and `this.props` are the properteis passed down to the component (more on this in a later step). So in essence
the render function is where you put your JSX and logic for React to render the component.

This component doesn't do much, so in the next step we are going to start bringing in the HTML from the static folder.

Next step - [Converting HTML to JSX](03-Converting-HTML-To-JSX.md)
