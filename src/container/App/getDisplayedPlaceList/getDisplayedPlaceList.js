import applyFilters from './applyFilters/applyFilters';

const getDisplayedPlaceList = (placeList, filters) => {
  const displayedPlaceList = applyFilters(placeList, filters);
  displayedPlaceList.sort(
    (a, b) => a.walkingTime.milliseconds - b.walkingTime.milliseconds
  );
  return displayedPlaceList;
};

export default getDisplayedPlaceList;
