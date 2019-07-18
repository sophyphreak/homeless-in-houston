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
      firstLoad: true
    };
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    const firstLoad = localStorage.getItem('firstLoad');
    this.setState(() => ({ firstLoad }));
    if (!firstLoad) {
      getPositionAndDurations({
        currentPosition: this.state.currentPosition,
        placeList: this.state.placeList,
        setState: this.setState
      });
    }
  }

  handleClick() {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('firstLoad', false);
    }
    this.setState(() => ({ firstLoad: false }));
    getPositionAndDurations({
      currentPosition: this.state.currentPosition,
      placeList: this.state.placeList,
      setState: this.setState
    });
  }

  render() {
    return (
      <>
        {this.state.firstLoad && (
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
