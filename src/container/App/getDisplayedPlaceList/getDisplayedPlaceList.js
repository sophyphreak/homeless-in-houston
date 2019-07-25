import applyFilters from './applyFilters/applyFilters';

const getDisplayedPlaceList = (unfilteredPlaceList, filters) => {
  const displayedPlaceList = applyFilters(unfilteredPlaceList, filters);
  displayedPlaceList.sort(
    (a, b) => a.walkingTime.milliseconds - b.walkingTime.milliseconds
  );
  return displayedPlaceList;
};

export default getDisplayedPlaceList;
