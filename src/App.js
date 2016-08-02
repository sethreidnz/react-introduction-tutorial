import React, { Component } from 'react';
import './App.css';

// Components
import MainNavigation from './components/MainNavigation';

class App extends Component {
  render() {
    return (
      <div className="App">     
          <MainNavigation/>
          <div className="container main-content">      
              {this.props.children}
          </div>
      </div>
    );
  }
}

export default App;
