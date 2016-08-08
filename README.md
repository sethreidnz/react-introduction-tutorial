This wiki and repository has been craeted as an introduction to the main features of [React](https://facebook.github.io/react/) 
and [React Router](https://github.com/reactjs/react-router). It was created using the [Create React App](https://github.com/facebookincubator/create-react-app)

If you have not already and wish to code along follow the [instructions found in the readme](https://github.com/justsayno/react-introduction).

You can follow along the code changes in each step on your local machine by cloning the repository and checkout out the 
branch that corresponds to the step in the tutorial. For example to go to the begining run the follwoing in a command window:

``` shell
git checkout step-0
```

Each step of the tutorial will have the git command that you need to see the code for that step.

## What I am building

I am going to start with an html version of am employee C.V. manager app designed to showcase a 
software service companies employees' skills, describing the projects they have been involved in and the technologies they
are experts in as individuals.

I have created a basic HTML version of the app that uses the [MaterializeCss](http://materializecss.com/) CSS framework for
styling. To have a look at this run the command:

```
npm run static
```

This will launch your browser and you can see the static version of the site. If you click on the "View C.V."
button for the top item you will see the static html version of an employees profile page.

### Project Structrure

If you have checkout of the branch `step-0` you will have a project structure like this:

``` 
React-Introduction/
 ├──src/                * The React app files
 |   ├──api/            * Simple mock api for employee data
 │   │
 |   ├──images/         * The images for the app
 │   │  
 |   └──index.js        * The entry point to the app
 |
 ├──Static/             * The static HTML that I have started with
 │
 |
 ├──Index.html          * The html page the React app is being rendered 
 |
 └──....                * Project setup related files
```
*Some detail has been ommitted for clarity*

## The Root Component

The file `src/index.js` is where I bootstrap my employee app. Although (as explained later) React 
does not use HTML templates I need to tell React where in our `index.html` file we would like to render our app.

I've done this using the `ReactDOM` library which is a seperate library to the core React library and allows
you to render your component heirarchy to a DOM node in your HTML like so:

``` javascript
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <div className="App">
    Hello World!
  </div>,
  document.getElementById('root')
)
```

At the top I import both React (this must be in scope if using and JSX) and ReactDOM. Then I call the 
[`ReactDOM.render()`](https://facebook.github.io/react/blog/2015/10/01/react-render-and-top-level-api.html) method. 
This method takes two arguments. The first argument a single component or HTML element and second argument is the DOM element 
that the app is to be rendered in. 

In this case we I am using a `<div>` containing "Hello World!" as the component and a `<div>` that has an `id` of `root` as the DOM element.  
In `index.html` I have:

``` html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>React App</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css">
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

I am also using the CDN version of materializeCSS as a simple way to pull in a styling framework. 

If you run `npm start` from your command line then you 
will see this render as a blank page with the "Hello World!" Message at the top left, just like a normal HTML page.


This should reload when you make changes or switch branches but sometimes the `create-react-app` build configuration doesn't work and you need to r
estart it. There are better build systems (or you can create your own) but I'm using the [Create React App](https://github.com/facebookincubator/create-react-app)
becuase it keeps all the bundling and non-react noise out of the project.