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
  placesList.sort(
    (a, b) => a.walkingTime.milliseconds - b.walkingTime.milliseconds
  );
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
        <h4>{name}</h4>
        <hr />
        <CardText>
          Walking Time: {walkingTime.text}
          <Button color="link">
            <a
              href={`https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${name.replace(
                / /g,
                '+'
              )}&travelmode=walking`}
            >
              Get walking directions
            </a>
          </Button>
          <br />
          Bus/Rail Time: {transitTime.text}
          <Button color="link">
            <a
              href={`https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${name.replace(
                / /g,
                '+'
              )}&travelmode=transit`}
            >
              Get bus/rail directions
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
