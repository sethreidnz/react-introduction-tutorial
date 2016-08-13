# JSX

**A lot of people get put off by React's use of JSX so I thought I would explain what it is and its benefits before we get into building our first React application.**

```
git checkout step-1
```

React uses an extended version of JavaScript called JSX. It basically just lets you put html-like markup
into your JavaScript. Where other frameworks bring JavaScipt to HTML; React brings HTML to JavaScript.

For example instead of doing something like this as you would in Angular 1.x:

``` javascript
var myApp = angular.module('app', []);
myApp.controller('HelloWorldController', ['$scope', function($scope) {
    $scope.message = 'Hello Word!';
}]);
```

``` html
<div ng-controller="HelloWorldController">
{{message}}
</div>
```

You could do as we did in the [Project Setup](https://github.com/justsayno/react-introduction/wiki/0---Project-Setup) step and simply do this:

``` JavaScript
ReactDOM.render(
  <div>
    Hello World!
  </div>,
  document.getElementById('root')
)

```

This is an extremely simplistic example of JSX and you will see more as we go along. You've probably notice you can place HTML tags but you can also place your own custom components 
as JSX as well (more on this later).

The main thing to note is that for some of the html attributes the name deviates from the name in html. This is because the React team decided to 
use the [JavaScript DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) names for various reasons least of which was
the fact that HTML uses camel casing which is not really ideal in JavaScript.

One of the most obvious ones is `class` becomes `className`. For more JSX Gotchas have a look at [this article](https://facebook.github.io/react/docs/jsx-gotchas.html).

## Why JSX?

Having our markup in our Javascript has a number of great advantages that are summed up really well in Corey House's post
[React’s JSX: The Other Side of the Coin](https://medium.com/@housecor/react-s-jsx-the-other-side-of-the-coin-2ace7ab62b98#.a4ktqckxa). Some of the key benefits include:

- Quick to fail. When there is an error in your JSX there will be compile issues and it will break with a clear error message.
- Leverage the power of JavaScript. Everything is JavaScript and you can use anything that is JavaScript to manipulate your rendered HTML.
- No propriety API for template logic. Everything is simply plain JavaScript with an HTML like syntax embedded in it.
- Less context switching. No need to have loosely coupled (but tightly coupled...) HTML and JavaScript where you don't know what relies on what attribute or value.

All that being said I can see some downsides. The most convincing one for me is the fact that it deviates from open web standards. However other templating engines used in 
other frameworks do exactly the same thing they just do it in the html.

You can read more about JSX [here in Facebook's in depth guide](https://facebook.github.io/react/docs/jsx-in-depth.html).

## Virtual DOM

Along side the idea of JSX is the [Virtual DOM](https://facebook.github.io/react/docs/glossary.html). This is how React manages state change and mutation.
You JSX is turned into an in-memory virtual representation which is used to create the actual HTML. When a change occurs in the state of your application
React first re-creates it's in-memory version of the DOM and then figures out the fastest way to turn the old HTML into what the new HTML needs to look like.

Each element in your JSX, be it a `<div>` or a `<CustomComponent />` is a `ReactElement`. "A `ReactElement` is a light, stateless, immutable, virtual representation 
of a `DOM Element`. It is a `virtual DOM`."

Next step - [First Component](02-First-Component.md)