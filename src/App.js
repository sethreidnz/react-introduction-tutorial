import React, { Component } from 'react';
import './App.css';
import locations from './api/locations';

// Components
import LocationCard from './components/LocationCard';

class App extends Component {
  render() {
    return (
      <div className="App">
          <nav>
            <div className="nav-wrapper teal ">
              <div className="container">
                <a href="#" className="brand-logo">New Zealand Scenic Locations</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="/">Home</a></li>
                </ul>
              </div>
            </div>
          </nav>
            <div className="container main-content">      
              <div className="row">
                  {locations.map(function(location) {
                    return <LocationCard location={location} key={location.id} />;
                  })}
              </div>
            </div>
      </div>
    );
  }
}

export default App;
