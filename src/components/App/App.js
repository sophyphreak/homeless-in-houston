import React, { Component } from 'react';
import loadGoogleMapsApi from 'load-google-maps-api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: {},
      distances: {
        'Fondren Library': '',
        'Houston Aquarium': ''
      }
    };
  }
  async componentDidMount() {
    try {
      const success = pos => {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;
        const currentPosition = { longitude, latitude };
        this.setState({ currentPosition });
      };
      const error = err => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      };
      navigator.geolocation.getCurrentPosition(success, error);
      const googleMaps = await loadGoogleMapsApi({
        key: process.env.GOOGLE_MAPS_KEY
      });
      const origins = ['4207 Mount Vernon St, Houston TX'];
      const destinations = ['Fondren Library', 'Houston Aquarium'];
      const service = new googleMaps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins,
          destinations,
          travelMode: 'WALKING'
        },
        response => {
          const distances = {};
          destinations.forEach((place, index) => {
            distances[place] = response.rows[0].elements[index].duration.text;
          });
          this.setState({ distances });
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
