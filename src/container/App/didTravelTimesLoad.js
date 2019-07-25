const didTravelTimesLoad = unfilteredPlaceList =>
  unfilteredPlaceList[0].hasOwnProperty('walkingTime') &&
  unfilteredPlaceList[0].hasOwnProperty('transitTime');

export default didTravelTimesLoad;
