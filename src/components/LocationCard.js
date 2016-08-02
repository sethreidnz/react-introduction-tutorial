import React, { PropTypes } from 'react';

const LocationCard = ({location}) => (
    <div className="col s12 m6">
        <div className="card">
            <div className="card-image">
                <img src={location.images.square} alt={location.name}/>
                <span className="card-title">{location.name}</span>
            </div>
            <div className="card-content">
                <p>{location.shortDescription}</p>
            </div>
            <div className="card-action">
                <a className="btn" href="#">Read more</a>
            </div>
        </div>
    </div>
);

LocationCard.propTypes = { 
    location: PropTypes.object.isRequired
};

export default LocationCard;

