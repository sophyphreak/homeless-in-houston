const filterByFamily = (displayedPlaceList, userHasFamily) =>
  displayedPlaceList.filter(place => {
    if (place.family === 'not okay' && userHasFamily === 'Yes') {
      return false;
    }
    return true;
  });
export default filterByFamily;
