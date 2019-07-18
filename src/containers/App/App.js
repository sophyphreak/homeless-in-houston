import React, { Component } from 'react';
import shelterList from './shelterList';
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Col,
  Spinner
} from 'reactstrap';
import getInitialPlaceList from './getInitialPlaceList';
import getPositionAndDurations from './getPositionAndDurations/getPositionAndDurations';
import FirstLoadCard from '../../components/FirstLoadCard/FirstLoadCard';
import PlaceList from '../../components/PlaceList/PlaceList';
import getFirstLoad from './getFirstLoad';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: {
        latitude: 0,
        longitude: 0
      },
      placeList: getInitialPlaceList(shelterList),
      firstLoad: getFirstLoad()
    };
    this.setState = this.setState.bind(this);
    this.shareLocationClicked = this.shareLocationClicked.bind(this);
  }

  componentDidMount() {
    const { firstLoad } = this.state;
    if (!firstLoad) {
      getPositionAndDurations({
        currentPosition: this.state.currentPosition,
        placeList: this.state.placeList,
        setState: this.setState
      });
    }
  }

  shareLocationClicked = () => {
    const firstLoad = false;
    this.setState(() => ({ firstLoad }));
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('firstLoad', firstLoad);
    }
    getPositionAndDurations({
      currentPosition: this.state.currentPosition,
      placeList: this.state.placeList,
      setState: this.setState
    });
  };

  render() {
    return (
      <>
        {this.state.firstLoad && (
          <FirstLoadCard onClick={this.shareLocationClicked} />
        )}

        {!this.state.firstLoad &&
          !this.state.placeList[0].hasOwnProperty('walkingTime') && (
            <Spinner style={{ marginLeft: '10em' }} color="purple" />
          )}
        <PlaceList
          placeList={this.state.placeList}
          currentPosition={this.state.currentPosition}
        />
      </>
    );
  }
}

export default App;
