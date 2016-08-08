``` shell
git checkout step-2
```

Converting out HTML into JSX is pretty straight forward. The main things you need to watch out for is `class` becoming `className` and making sure you always close your tags. For example if you look at the original static html I had `<img>` and `<br>` tags that should have been self closing like `<br/>`. 

Now if you look in `src/App.js` you will see this:

``` javascript
import React, { Component } from 'react'

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
              <li className="collection-item avatar">
                  <img src="../src/images/gabriella-boon.png" alt="" className="circle" />
                  <span className="title">Gabriella Boone</span>
                  <p>.NET developer <br/>
                    Modern Apps
                  </p>
                  <a href="#" className="secondary-content btn black"><i className="material-icons left">description</i>View C.V.</a>
              </li>
              {... list items truncated for brevity}
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

Now if you load the app in the browser with `npm start` then you will see it looks just like the original HTML list...

## Importing css styles

On other thing we did here to get this working is included a new file `index.css` which has all our css for the application. In a larger React app you would split this css out by feature or component but we are just going to keep it all in one file for now. This was being loaded in our static html via a `<link>` tag.

The interesting thing to note is **how** I I have included the css in the JavaScript. The project build system is using [Webpack](https://webpack.github.io/) under the hood Webpack is a an extremely powerful module bundler which can be extended to load all sorts of files and inline them into your JavaScript. This tutorial is not concerned with HOW Webpack does this, or how to configure it but the following I have imported the `index.css` styles into my app at the top of `index.js`:

```
import './index.css';
```

That's it! In the next step we will start breaking this HTML into components.