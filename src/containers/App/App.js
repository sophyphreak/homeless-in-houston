import React, { Component } from 'react';
import loadGoogleMapsApi from 'load-google-maps-api';
import parseDuration from 'parse-duration';
import getCurrentPosition from './getCurrentPosition';
import shelterList from './shelterList';
import PlacesList from '../../components/PlacesList/PlacesList';
import { Spinner } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: {
        latitude: 0,
        longitude: 0
      },
      places: {},
      loading: false
    };
  }

  componentDidMount() {
    let result = localStorage.getItem('share');
    if (result) {
      this.handleClick();
    } else {
      return;
    }
  }

  handleClick = async () => {
    try {
      localStorage.setItem('share', true);
      this.setState({ loading: true });
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
            const walkingTime = response.rows[0].elements[index].duration.text;
            places[place].walkingTime = {
              text: walkingTime,
              milliseconds: parseDuration(walkingTime)
            };
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
            const transitTime = response.rows[0].elements[index].duration.text;
            places[place].transitTime = {
              text: transitTime,
              milliseconds: parseDuration(transitTime)
            };
          });
          this.setState(() => ({ places, loading: false }));
        }
      );
    } catch (e) {
      console.log('ERROR:', e);
    }
  };

  render() {
    return (
      <>
        {!localStorage.getItem('share') && (
          <>
            <p>
              This application shows you homeless shelters that are close to
              you. In order to do that, please click on the button below to
              share your location.
            </p>
            <button onClick={this.handleClick}>Share location</button>{' '}
          </>
        )}

        {this.state.loading && (
          <Spinner style={{ marginLeft: '4px' }} color="purple" />
        )}
        <PlacesList
          places={this.state.places}
          currentPosition={this.state.currentPosition}
        />
      </>
    );
  }
}

export default App;
