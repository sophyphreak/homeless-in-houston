const filterByLGBT = (localPlaceList, filterLGBT) =>
  localPlaceList.filter(place => {
    if (place.lgbt && filterLGBT === 'No') {
      return false;
    }
    return true;
  });
export default filterByLGBT;
