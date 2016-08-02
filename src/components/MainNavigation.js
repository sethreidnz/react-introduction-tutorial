import React from 'react';

const MainNavigation = ({location}) => (
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
);

export default MainNavigation;

