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
import PlaceList from '../../components/PlaceList/PlaceList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: {
        latitude: 0,
        longitude: 0
      },
      placeList: getInitialPlaceList(shelterList),
      share: false
    };
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    let result = localStorage.getItem('share');
    this.setState({ share: result });
    if (result) {
      this.handleClick();
    } else {
      return;
    }
  }

  handleClick = async () => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('share', true);
      }
      this.setState({ share: true });
      const currentPosition = this.state.currentPosition;
      const placeList = this.state.placeList;
      const setState = this.setState;
      getPositionAndDurations({
        currentPosition,
        placeList,
        setState
      });
    } catch (e) {
      console.log('ERROR:', e);
    }
  };

  render() {
    return (
      <>
        {!this.state.share && (
          <Col xs="12" sm={{ size: 8, offset: 2 }}>
            <Card>
              <CardBody>
                <CardTitle>
                  <b>Hey there!</b>
                </CardTitle>
                <hr />
                <CardText>
                  After you share your location, we will show you the services
                  closest to you.
                </CardText>
                <br />
                <Button color="primary" onClick={this.handleClick}>
                  Share location
                </Button>
              </CardBody>
            </Card>
          </Col>
        )}

        {!this.state.placeList[0].hasOwnProperty('walkingTime') && (
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
