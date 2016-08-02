import React, { Component } from 'react';
import './App.css';
import locations from './api/locations';

// Components
import LocationCard from './components/LocationCard';
import MainNavigation from './components/MainNavigation';

class App extends Component {
  render() {
    return (
      <div className="App">
            <MainNavigation/>
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
