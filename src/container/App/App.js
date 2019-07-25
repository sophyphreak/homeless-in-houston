import React, { Component } from 'react';

import AppView from '../../presentational/AppView/AppView';

import getFirstLoad from './getFirstLoad';
import getPositionAndDurations from './getPositionAndDurations/getPositionAndDurations';
import getInitialPlaceList from './getInitialPlaceList/getInitialPlaceList';
import didTravelTimesLoad from './didTravelTimesLoad';
import getDisplayedPlaceList from './getDisplayedPlaceList/getDisplayedPlaceList';

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
      filters: {
        gender: '',
        age: '',
        family: '',
        lgbt: '',
        pets: '',
        veteran: '',
        service: 'Night Shelter'
      }
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
    const { isFirstLoad, filters, placeList, currentPosition } = this.state;
    return (
      <AppView
        isFirstLoad={isFirstLoad}
        filters={filters}
        displayedPlaceList={getDisplayedPlaceList({
          placeList,
          filters
        })}
        currentPosition={currentPosition}
        shareLocationClicked={this.shareLocationClicked}
        onChooseFilter={this.onChooseFilter}
        travelTimesFinishedLoading={didTravelTimesLoad(placeList)}
      />
    );
  }
}

export default App;
