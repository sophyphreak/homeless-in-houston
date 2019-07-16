import React, { Component } from 'react';
import loadGoogleMapsApi from 'load-google-maps-api';
import getCurrentPosition from './getCurrentPosition';
import shelterList from './shelterList';
import getInitialPlaceList from './getInitialPlaceList';
import getTravelDuration from './getTravelDuration';
import PlaceList from '../../components/PlaceList/PlaceList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: {
        latitude: 0,
        longitude: 0
      },
      placeList: getInitialPlaceList(shelterList)
    };
  }
  async componentDidMount() {
    try {
      let placeList = this.state.placeList;
      const currentPosition = await getCurrentPosition();
      this.setState(() => ({ currentPosition }));
      const googleMaps = await loadGoogleMapsApi({
        key: process.env.GOOGLE_MAPS_KEY
      });
      const { latitude, longitude } = this.state.currentPosition;
      const origins = [new googleMaps.LatLng(latitude, longitude)];
      const destinations = placeList.map(({ name }) => name + ' Houston');
      const service = new googleMaps.DistanceMatrixService();
      placeList = await getTravelDuration({
        placeList,
        service,
        origins,
        destinations,
        travelMode: 'WALKING'
      });
      placeList = await getTravelDuration({
        placeList,
        service,
        origins,
        destinations,
        travelMode: 'TRANSIT'
      });
      this.setState(() => ({ placeList }));
    } catch (e) {
      console.log('ERROR:', e);
    }
  }
  render() {
    return (
      <PlaceList
        placeList={this.state.placeList}
        currentPosition={this.state.currentPosition}
      />
    );
  }
}

export default App;
