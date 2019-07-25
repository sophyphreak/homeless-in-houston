const didTravelTimesLoad = placeList =>
  placeList[0].hasOwnProperty('walkingTime') &&
  placeList[0].hasOwnProperty('transitTime');

export default didTravelTimesLoad;
