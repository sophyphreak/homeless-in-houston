import React from 'react';
import Place from './Place/Place';
import googleMapsCallCompleted from './googleMapsCallCompleted';
import applyFilters from './applyFilters/applyFilters';

const PlaceList = ({ displayedPlaceList, currentPosition, filters }) => {
  if (googleMapsCallCompleted(displayedPlaceList)) {
    const localPlaceList = applyFilters(displayedPlaceList, filters);
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
