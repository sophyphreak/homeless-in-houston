const filterByLGBT = (displayedPlaceList, userIsLGBT) =>
  displayedPlaceList.filter(place => {
    if (place.lgbt === 'specific' && userIsLGBT === 'No') {
      return false;
    }
    return true;
  });
export default filterByLGBT;
