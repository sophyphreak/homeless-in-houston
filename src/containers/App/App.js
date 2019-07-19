import React, { Component } from 'react';
import { Spinner } from 'reactstrap';

import FirstLoadCard from '../../components/FirstLoadCard/FirstLoadCard';
import PlaceList from '../../components/PlaceList/PlaceList';

import getFirstLoad from './getFirstLoad';
import getPositionAndDurations from './getPositionAndDurations/getPositionAndDurations';
import shelterList from './shelterList';
import getInitialPlaceList from './getInitialPlaceList';
import Gender from '../../components/Filters/Gender/Gender';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: {
        latitude: 0,
        longitude: 0
      },
      placeList: getInitialPlaceList(shelterList),
      isFirstLoad: getFirstLoad()
    };
    this.setState = this.setState.bind(this);
    this.shareLocationClicked = this.shareLocationClicked.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  componentDidMount() {
    const { isFirstLoad } = this.state;
    if (!isFirstLoad) {
      getPositionAndDurations({
        currentPosition: this.state.currentPosition,
        placeList: this.state.placeList,
        setState: this.setState
      });
    }
  }

  shareLocationClicked = () => {
    const isFirstLoad = false;
    this.setState(() => ({ isFirstLoad }));
    if (typeof window !== 'undefined') {
      // for `gatsby build` to succeed
      window.localStorage.setItem('isFirstLoad', isFirstLoad);
    }
    getPositionAndDurations({
      currentPosition: this.state.currentPosition,
      placeList: this.state.placeList,
      setState: this.setState
    });
  };

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  render() {
    return (
      <>
        {this.state.isFirstLoad && (
          <FirstLoadCard onClick={this.shareLocationClicked} />
        )}

        {!this.state.isFirstLoad && !walkingTimeHasLoaded(this.state) && (
          <Spinner style={{ marginLeft: '10em' }} color="purple" />
        )}
        <Gender
          rSelected={this.state.rSelected}
          onRadioBtnClick={rSelected => this.onRadioBtnClick(rSelected)}
        />
        <PlaceList
          placeList={this.state.placeList}
          currentPosition={this.state.currentPosition}
        />
      </>
    );
  }
}

const walkingTimeHasLoaded = state =>
  state.placeList[0].hasOwnProperty('walkingTime');

export default App;
