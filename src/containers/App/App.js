import React, { Component } from 'react';
import shelterList from './shelterList';
import { Spinner } from 'reactstrap';
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
      loading: false,
      placeList: getInitialPlaceList(shelterList)
    };
    this.setState = this.setState.bind(this);
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
      const currentPosition = this.state.currentPosition;
      const placeList = this.state.placeList;
      const setState = this.setState;
      getPositionAndDurations({
        currentPosition,
        placeList,
        setState
      });
      this.setState({ loading: false });
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
        <PlaceList
          placeList={this.state.placeList}
          currentPosition={this.state.currentPosition}
        />
      </>
    );
  }
}

export default App;
