import React, { Component } from 'react';
import { Spinner } from 'reactstrap';

import FirstLoadCard from '../../components/FirstLoadCard/FirstLoadCard';
import PlaceList from '../../components/PlaceList/PlaceList';

import getFirstLoad from './getFirstLoad';
import getPositionAndDurations from './getPositionAndDurations/getPositionAndDurations';
import getInitialPlaceList from './getInitialPlaceList/getInitialPlaceList';
import Filters from '../../components/Filters/Filters';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: {
        latitude: 0,
        longitude: 0
      },
      placeList: getInitialPlaceList(),
      isFirstLoad: getFirstLoad(),
      filters: {}
    };
    this.setState = this.setState.bind(this);
    this.shareLocationClicked = this.shareLocationClicked.bind(this);
    this.onChooseFilter = this.onChooseFilter.bind(this);
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

  onChooseFilter({ name, selected }) {
    const filters = this.state.filters;
    filters[name] = selected;
    this.setState(() => ({ filters }));
  }

  render() {
    return (
      <>
        {this.state.isFirstLoad && (
          <FirstLoadCard onClick={this.shareLocationClicked} />
        )}

        {!this.state.isFirstLoad && !travelTimesHaveLoaded(this.state) && (
          <Spinner style={{ marginLeft: '10em' }} color="purple" />
        )}
        <Filters
          filters={this.state.filters}
          onChooseFilter={this.onChooseFilter}
        />
        <PlaceList
          placeList={this.state.placeList}
          currentPosition={this.state.currentPosition}
          filters={this.state.filters}
        />
      </>
    );
  }
}

const travelTimesHaveLoaded = state =>
  state.placeList[0].hasOwnProperty('walkingTime') &&
  state.placeList[0].hasOwnProperty('transitTime');

export default App;
