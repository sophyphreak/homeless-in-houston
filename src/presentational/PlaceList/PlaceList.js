import React from 'react';
import Place from './Place/Place';
import applyFilters from './applyFilters/applyFilters';

const PlaceList = ({ displayedPlaceList, currentPosition, filters }) => {
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
};

export default PlaceList;
