import React from 'react';
import Place from './Place/Place';

const PlaceList = ({ placeList, currentPosition }) => {
  if (googleMapsCallCompleted(placeList)) {
    placeList.sort(
      (a, b) => a.walkingTime.milliseconds - b.walkingTime.milliseconds
    );
    return (
      <div>
        {placeList.map((place, index) => {
          return <Place {...place} {...currentPosition} key={index} />;
        })}
      </div>
    );
  } else {
    return <p>Please provide your location...</p>;
  }
};

const googleMapsCallCompleted = placeList =>
  placeList[0].hasOwnProperty('walkingTime');

export default PlaceList;
