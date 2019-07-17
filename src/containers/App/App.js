import React, { Component } from 'react';
import shelterList from './shelterList';
import getInitialPlaceList from './getInitialPlaceList';
import getPositionAndDurations from './getPositionAndDurations/getPositionAndDurations';
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
    this.setState = this.setState.bind(this);
  }
  async componentDidMount() {
    const currentPosition = this.state.currentPosition;
    const placeList = this.state.placeList;
    const setState = this.setState;
    getPositionAndDurations({
      currentPosition,
      placeList,
      setState
    });
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
