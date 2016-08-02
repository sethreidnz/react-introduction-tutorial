import React, { Component } from 'react';
import locations from '../api/locations';

// Components
import LocationCard from '../components/LocationCard';

class LocationList extends Component {
  render() {
    return (   
        <div className="row">
            <div class="col s12 m4">
                    <img src="/src/images/aratiatia-rapids-sq.jpg" alt="Aratiatia Rapids"/>
            </div>
            <div class="col s12 m8">
                <h2>Aratiatia Rapids</h2>
                <p>
                    A few times each day, spill gates from a dam are opened at the top of the Aratiatia rapids and the narrow gorge 
                    fills with turbulent water surging past at up to 90,000 litres per second. Then, as the gates are closed about 
                    thirty minutes later, the turbulence recedes to a placid stream. By seeing the transition to full-flow and back again, 
                    visitors can fully appreciate the power of nature.
                </p>
                <p>   
                    At Aratiatia the Waikato River falls naturally through 28 metres in the space of one kilometre. This natural drop has 
                    been harnessed for environmentally-sustainable hydroelectric power - headwaters are diverted through a tunnel to the 
                    power station. Each day at 10am, 12 noon and 2pm - and also at 4pm in summer - the flow through the Aratiatia rapids 
                    is allowed to resume its natural rate. There are several excellent vantage points on the high rock bluffs that dominate 
                    this turbulent stretch of the river.
                </p>
            </div>
        </div>
    );
  }
}

export default LocationList;
