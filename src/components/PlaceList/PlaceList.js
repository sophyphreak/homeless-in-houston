import React from 'react';
import copy from 'utils-copy';
import camelCase from 'camelcase';
import Place from './Place/Place';

const PlaceList = ({ placeList, currentPosition, filters: { gender } }) => {
  if (googleMapsCallCompleted(placeList)) {
    let localPlaceList = copy(placeList);
    localPlaceList.sort(
      (a, b) => a.walkingTime.milliseconds - b.walkingTime.milliseconds
    );
    localPlaceList = filterByGender(localPlaceList, gender);
    return (
      <div>
        {localPlaceList.map((place, index) => (
          <Place {...place} {...currentPosition} key={index} />
        ))}
      </div>
    );
  } else {
    return <></>;
  }
};

const googleMapsCallCompleted = placeList =>
  placeList[0].hasOwnProperty('walkingTime') &&
  placeList[0].hasOwnProperty('transitTime');

const filterByGender = (localPlaceList, gender) =>
  localPlaceList.filter(place => place.gender[camelCase(gender || '')]);

export default PlaceList;
