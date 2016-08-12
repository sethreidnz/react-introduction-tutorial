# Introduction - What am I building?

I am starting with an html version of am employee C.V. manager app designed to showcase a 
software service company's employees' skills. It describes the projects each employee has been involved in and the technologies 
they are experts in. This a good way to start a React application as its a good exercise in breaking
the markup and behavior down into components.

I have made the basic HTML version of the app using the [MaterializeCss](http://materializecss.com/) CSS framework for
styling. To see this in action run:

```
npm run static
```

This will launch your browser and you will see the static version of the site. If you click on the "View C.V."
button for the "Gabriella Boon" you will see the static html version of an employee profile page.

### Project structure

```
git checkout step-0
```

At this stage the project structure looks like this:

``` 
React-Introduction/
 ├──src/                * The React app files
 |   ├──api/            * Simple mock API for employee data
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
*Some detail has been omitted for clarity*

## The Root Component

The file `src/index.js` is where I bootstrap my employee app. Although (as explained later) React 
does not use HTML templates I need to tell React where in our `index.html` file we would like to render our app.

I've done this using the `ReactDOM` library which is separate to the core React library and allows
you to render your component hierarchy to a DOM node in your HTML like so:

``` javascript
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <div>
    Hello World!
  </div>,
  document.getElementById('root')
)
```

At the top I import both React (this must be in scope if using JSX) and ReactDOM. Then I call the 
[`ReactDOM.render()`](https://facebook.github.io/react/blog/2015/10/01/react-render-and-top-level-api.html) method. 
This method takes two arguments. The first argument a single component or HTML element and second argument is the DOM element 
that the app is to be rendered in. 

In this case I am using a `<div>` containing "Hello World!" as the component and a `<div>` that has an `id` of `root` as the DOM element.  
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

I am also using the CDN version of materializeCSS as a simple way to pull in a styling framework. As your app grows it would
be worth looking into loading these styles into your React app as well.

If you run `npm start` from your command line then you will see this render as a blank page with the "Hello World!" Message at 
the top left, just like a normal HTML page. 

> This should reload when you make changes or switch branches but sometimes the `create-react-app` build configuration doesn't 
> work and you need to restart it. There are better build systems (or you can create your own) but I'm using the 
> [Create React App](https://github.com/facebookincubator/create-react-app) because it keeps all the bundling and non-react 
> noise out of the project.

This is the beginig of a React App! Next we need to learn about JSX.

Next step - [JSX](01-JSX.md)
