import React from 'react';
import { Card, CardBody, CardText, Button } from 'reactstrap';

const PlacesList = ({ places, currentPosition }) => {
  const placeNames = Object.keys(places);
  const placesList = placeNames.map(name => {
    const place = { name };
    place.walkingTime = places[name].walkingTime;
    place.transitTime = places[name].transitTime;
    return place;
  });
  if (placesList.length) {
    placesList.sort(
      (a, b) => a.walkingTime.milliseconds - b.walkingTime.milliseconds
    );
  }
  return (
    <div>
      {placesList.map((place, index) => {
        return <Place {...place} {...currentPosition} key={index} />;
      })}
    </div>
  );
};

const Place = ({
  walkingTime = {},
  transitTime = {},
  latitude,
  longitude,
  name
}) => (
  <>
    <Card>
      <CardBody>
        <h4>{name.slice(0, name.length - 7)}</h4>
        <hr />
        <CardText style={{ fontSize: '1.4em' }}>
          <strong>{walkingTime.text}</strong> walking
          <br />
          <Button color="link" style={{ fontSize: '0.9em' }}>
            <a
              href={`https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${name.replace(
                / /g,
                '+'
              )}&travelmode=walking`}
            >
              walking directions
            </a>
          </Button>
          <br />
          <strong>{transitTime.text}</strong> taking bus/rail
          <br />
          <Button color="link" style={{ fontSize: '0.9em' }}>
            <a
              href={`https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${name.replace(
                / /g,
                '+'
              )}&travelmode=transit`}
            >
              bus/rail directions
            </a>
          </Button>
        </CardText>
      </CardBody>
    </Card>
    <br />
  </>
);

// const generateHref =

export default PlacesList;
