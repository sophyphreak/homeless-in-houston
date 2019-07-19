import React from 'react';
import camelCase from 'camelcase';
import Place from './Place/Place';

const PlaceList = ({ placeList, currentPosition, filters }) => {
  if (googleMapsCallCompleted(placeList)) {
    placeList.sort(
      (a, b) => a.walkingTime.milliseconds - b.walkingTime.milliseconds
    );
    return (
      <div>
        {placeList
          .filter(place => place.gender[camelCase(filters.gender || '')])
          .map((place, index) => (
            <Place {...place} {...currentPosition} key={index} />
          ))}
      </div>
    );
  } else {
    return <></>;
  }
};

const googleMapsCallCompleted = placeList =>
  placeList[0].hasOwnProperty('walkingTime');

export default PlaceList;
