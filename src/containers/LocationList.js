import React, { Component } from 'react'
import locations from '../api/locations'

// Components
import LocationCard from '../components/LocationCard'

class LocationList extends Component {
  render() {
      debugger
    return (   
        <div className="row">
            {locations.map((location) => {
                return <LocationCard key={location.id} location={location} />
            })}
        </div>
    )
  }
}

export default LocationList
