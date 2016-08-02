import React, { Component } from 'react';
import locations from '../api/locations';

// Components
import LocationCard from '../components/LocationCard';

class LocationList extends Component {
  render() {
    return (   
        <div className="row">
            {locations.map(function(location) {
            return <LocationCard location={location} key={location.id} />;
            })}
        </div>
    );
  }
}

export default LocationList;
