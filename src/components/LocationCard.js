import React from 'react';

const LocationCard = () => (
    <div className="col s12 m6">
        <div className="card">
            <div className="card-image">
                <img src="/src/images/huka-falls-rect.jpg" alt="Huka Falls"/>
                <span className="card-title">Huka Falls</span>
            </div>
            <div className="card-content">
                <p>The Waikato River, New Zealand's longest river, moves gracefully north from Lake Taupo between banks 100 metres apart.</p>
            </div>
            <div className="card-action">
                <a className="btn" href="single-huka-falls.html">Read more</a>
            </div>
        </div>
    </div>
);

export default LocationCard;

