import React, { Component } from 'react'
import { getLocation } from '../api/locations'

class LocationDetail extends Component {
    constructor(props){
        super(props)
        debugger
        const { id } = props.params
        let location = getLocation(id)
        this.state = {
            location: location
        }
    }
    render() {

        const { name, images, longDescription } = this.state.location
        
        return (   
            <div className="row">
                <div className="col s12 m4">
                    <img src={images.square} alt={name} />
                </div>
                <div className="col s12 m8">
                    <h2>{name}</h2>
                    {longDescription}
                </div>
            </div>
        )
  }
}

export default LocationDetail
