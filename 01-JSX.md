**A lot of people get put off by React's use of JSX so I thought I would quickly give an introduction to it before we get into the building our first React application.**

```
git checkout step-1
```

React uses an extended version of JavaScript called JSX. It basically just lets you put html-like markup
into your JavaScript. Where other frameworks bring JavaScipt to HTML React bring HTML to JavaScript.

For example instead of doing something like this as you would in Angular:

``` javascript
var myApp = angular.module('spicyApp1', []);
myApp.controller('HelloWorldController', ['$scope', function($scope) {
    $scope.message = 'Hello Word!';
}]);
```

``` html
<div ng-controller="HelloWorldController">
{{message}}
</div>
```

You would could do as we did in in the [Project Setup](https://github.com/justsayno/react-introduction/wiki/0---Project-Setup) step and simply do this:

``` JavaScript
ReactDOM.render(
  <div>
    Hello World!
  </div>,
  document.getElementById('root')
)

```

This is an extremely simplistic example of JSX and you will see more as we go along. As you can see you can place HTML tags but you can also place your own custom components as JSX as well (more on this later)

The main thing to note is that for some of the html attributes the name deviates from the name in html. This is because the React team decided to use the [JavaScript DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) names because it already existed and was in camel case which makes it a lot easier to use in JavaScript (html is snake case).

One of the most obvious ones is `class` becomes `className`. For more JSX Gotchas have a look at [this article](https://facebook.github.io/react/docs/jsx-gotchas.html).

## Why JSX?

Having our markup in our Javascript has a number of great advantages that are summed up really well in Corey House's post [React’s JSX: The Other Side of the Coin](https://medium.com/@housecor/react-s-jsx-the-other-side-of-the-coin-2ace7ab62b98#.a4ktqckxa). Some of the key benefits include:

- Quick to fail. When there is an error in your JSX there will be compile issues and it will break with a clear error message
- Leverage the power of JavaScript. Everything is JavaScript and you can use anything that is JavaScript to manipulate your rendered HTML
- No propriety API for template logic. Everything is simply plain JavaScript with an HTML like syntax embedded in it.
- Less context switching. No need to have loosely coupled HTML and JavaScript where you don't know what relies on what attribute or value

All that being said I can see some downsides, the most convincing one is that of deviation from open web standards. That being said other templating engines used in other frameworks do exactly the same thing (just on their html) so I don't really see this as a huge issue.

You can read more about JSX [here in Facebook's in depth guide](https://facebook.github.io/react/docs/jsx-in-depth.html).

