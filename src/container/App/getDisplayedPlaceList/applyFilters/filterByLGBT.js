const filterByLGBT = (displayedPlaceList, filterLGBT) =>
  displayedPlaceList.filter(place => {
    if (place.lgbt && filterLGBT === 'No') {
      return false;
    }
    return true;
  });
export default filterByLGBT;
