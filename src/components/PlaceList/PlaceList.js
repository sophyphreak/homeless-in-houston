import React from 'react';
import Place from './Place/Place';
import googleMapsCallCompleted from './googleMapsCallCompleted';
import applyFilters from './applyFilters/applyFilters';

const PlaceList = ({ placeList, currentPosition, filters }) => {
  if (googleMapsCallCompleted(placeList)) {
    const localPlaceList = applyFilters(placeList, filters);
    localPlaceList.sort(
      (a, b) => a.walkingTime.milliseconds - b.walkingTime.milliseconds
    );
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

export default PlaceList;
