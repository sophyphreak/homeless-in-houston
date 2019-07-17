import React from 'react';
import Place from '../Place/Place';

const PlaceList = ({ placeList, currentPosition }) => {
  if (placeList[0].hasOwnProperty('walkingTime')) {
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

export default PlaceList;
