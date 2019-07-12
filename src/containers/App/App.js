import React, { Component } from 'react';
import loadGoogleMapsApi from 'load-google-maps-api';
import parseDuration from 'parse-duration';
import getCurrentPosition from './getCurrentPosition';
import shelterList from './shelterList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: {
        latitude: 0,
        longitude: 0
      },
      places: {}
    };
  }
  async componentDidMount() {
    try {
      const currentPosition = await getCurrentPosition();
      this.setState(() => ({ currentPosition }));
      const googleMaps = await loadGoogleMapsApi({
        key: process.env.GOOGLE_MAPS_KEY
      });
      const { latitude, longitude } = this.state.currentPosition;
      const origins = [new googleMaps.LatLng(latitude, longitude)];
      const destinations = shelterList.map(place => place + ' Houston');
      const service = new googleMaps.DistanceMatrixService();
      await service.getDistanceMatrix(
        {
          origins,
          destinations,
          travelMode: 'WALKING'
        },
        response => {
          const places = this.state.places || {};
          destinations.forEach((place, index) => {
            if (!places[place]) places[place] = {};
            places[place].walkingTime = parseDuration(
              response.rows[0].elements[index].duration.text
            );
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
            places[place].transitTime = parseDuration(
              response.rows[0].elements[index].duration.text
            );
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
