# Project Setup

This project has been setup using the [Create React App](https://github.com/facebookincubator/create-react-app)
to keep it very simple and shows off the basic features of [React](https://facebook.github.io/react/) 
and [React Router](https://github.com/reactjs/react-router).

## Introduction

We are going to start with an html verion of the final simple showcase of 
scenic New Zealand locations displayed using [MaterializeCss](http://materializecss.com/).

To have a look at this run the command

```
npm run static
```

This will launch your browser and you can see the static version of hte site. This is a simple master-detail
design where you can click through to see more information about the locations.

## Coding along

This project is setup so that you can use the branches to code along with each step. To go to the start run the following:

```
git checkout step-0
```

This will leave you with a bare bones version of the project. The structure is like this:

```
React-Introduction/
 ├──src/                             * Android specific build/setup files
 |   ├──Actions/                     * Action types and creaters. [Read more](/App/Actions/Readme.md)
 │   │
 |   ├──Actions/  
 │   │ 
 |   └──Root.js/  
 |
 ├──App/                              * The source files that will be compiled to create the app
 |   ├──Actions/                      * Action types and creaters. [Read more](/App/Actions/Readme.md)
 │   │
 │   │ 
 |   └──Root.js/                      * The root entry file for the application
 |
 ├──Docs/                             * Documentation for the project
 |
 ├──fastlane/                         * ???
 |
 ├──git_hooks/                        * Defined git_hooks
 |
 ├──ios/                              * ios specific code
 |
 └──Tests/                            * Tests for the application
```

