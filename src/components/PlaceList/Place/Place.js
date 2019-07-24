import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';
import DirectionsLink from './DirectionsLink/DirectionsLink';

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
          <DirectionsLink
            travelMode="walking"
            latitude={latitude}
            longitude={longitude}
            name={name}
          />
          <br />
          <strong>{transitTime.text}</strong> taking bus/rail
          <br />
          <DirectionsLink
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
