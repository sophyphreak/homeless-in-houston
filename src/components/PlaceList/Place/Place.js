import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';
import DirectionsButton from './DirectionsButton/DirectionsButton';

const Place = ({
  walkingTime,
  transitTime = {},
  latitude,
  longitude,
  name
}) => (
  <>
    <Card>
      <CardBody>
        <h4>{name}</h4>
        <hr />
        <CardText style={{ fontSize: '1.4em' }}>
          <strong>{walkingTime.text}</strong> walking
          <br />
          <DirectionsButton
            travelMode="walking"
            latitude={latitude}
            longitude={longitude}
            name={name}
          />
          <br />
          <strong>{transitTime.text}</strong> taking bus/rail
          <br />
          <DirectionsButton
            travelMode="transit"
            latitude={latitude}
            longitude={longitude}
            name={name}
          />
        </CardText>
      </CardBody>
    </Card>
    <br />
  </>
);

export default Place;
