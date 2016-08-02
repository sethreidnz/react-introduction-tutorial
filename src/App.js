import React, { Component } from 'react';
import './App.css';

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
                <div className="col s12 m6">
                  <div className="card">
                    <div className="card-image">
                      <img src="/src/images/nugget-point-lighthouse-rect.jpg" alt="Nugget Point Lighthouse"/>
                      <span className="card-title">Nuget Point Lighthouse</span>
                    </div>
                    <div className="card-content">
                      <p>Nugget Point is one of the most distinctive landforms along the Otago coast. It's a steep headland with a lighthouse and a scattering of rocky islets (The Nuggets).</p>
                    </div>
                    <div className="card-action">
                      <a className="btn" href="single-nugget-point-lighthouse.html">Read more</a>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6">
                  <div className="card">
                    <div className="card-image">
                      <img src="/src/images/te-mata-peak-rect.jpg" alt="Te Mata Peak"/>
                      <span className="card-title">Te Mata Peak</span>
                    </div>
                    <div className="card-content">
                      <p>Te Mata Peak is at the western boundary of the wine-producing Heretaunga Plains and stands nearly 400 metres above sea level.</p>
                    </div>
                    <div className="card-action">
                      <a className="btn" href="single-te-mata-peak.html">Read more</a>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6">
                  <div className="card">
                    <div className="card-image">
                      <img src="/src/images/aratiatia-rapids-rect.jpg" alt="Aratiatia Rapids" />
                      <span className="card-title">Aratiatia Rapids</span>
                    </div>
                    <div className="card-content">
                      <p>A few times each day the narrow gorge fills with turbulent water surging past at up to 90,000 litres per second.</p>
                    </div>
                    <div className="card-action">
                      <a className="btn" href="single-aratiatia-rapids.html">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    );
  }
}

export default App;
