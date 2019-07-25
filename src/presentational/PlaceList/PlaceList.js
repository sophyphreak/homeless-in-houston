import React from 'react';
import Place from './Place/Place';

const PlaceList = ({ displayedPlaceList, currentPosition }) => {
  return (
    <div>
      {displayedPlaceList.map((place, index) => (
        <Place {...place} {...currentPosition} key={index} />
      ))}
    </div>
  );
};

export default PlaceList;
