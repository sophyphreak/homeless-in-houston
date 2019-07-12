import React, { Component } from 'react';
import loadGoogleMapsApi from 'load-google-maps-api';
import getCurrentPosition from './getCurrentPosition';

const shelters = [
  "Star of Hope - Men's Development Center",
  'Salvation Army - Red Shield Lodge',
  'Star of Hope Cornerstone Community',
  'Salvation Army - Family Residence',
  "Salvation Army - Sally's House",
  'Covenant House',
  'Y.A.R.C.',
  'The Beacon',
  'VA McGovern Drop In Center'
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: {},
      places: {}
    };
  }
  async componentDidMount() {
    try {
      const currentPosition = getCurrentPosition();
      this.setState(() => ({ currentPosition }));
      const googleMaps = await loadGoogleMapsApi({
        key: process.env.GOOGLE_MAPS_KEY
      });
      const origins = ['4207 Mount Vernon St, Houston TX'];
      // const origi
      const destinations = shelters.map(place => place + ' Houston');
      const service = new googleMaps.DistanceMatrixService();
      await service.getDistanceMatrix(
        {
          origins,
          destinations,
          travelMode: 'WALKING'
        },
        response => {
          console.log(response);
          const places = this.state.places || {};
          destinations.forEach((place, index) => {
            if (!places[place]) places[place] = {};
            places[place].walkingTime =
              response.rows[0].elements[index].duration.text;
          });
          this.setState(() => ({ places }));
        }
      );
      await service.getDistanceMatrix(
        {
          origins,
          destinations,
          travelMode: 'TRANSIT'
        },
        response => {
          const places = this.state.places || {};
          destinations.forEach((place, index) => {
            if (!places[place]) places[place] = {};
            places[place].transitTime =
              response.rows[0].elements[index].duration.text;
          });
          this.setState(() => ({ places }));
        }
      );
    } catch (e) {
      console.log('ERROR:', e);
    }
  }
  render() {
    return <p>i'm in App</p>;
  }
}

export default App;
