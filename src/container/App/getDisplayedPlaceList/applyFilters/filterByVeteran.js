const filterByVeteran = (displayedPlaceList, userIsVeteran) =>
  displayedPlaceList.filter(place => {
    if (place.veteran === 'specific' && userIsVeteran === 'No') {
      return false;
    }
    return true;
  });
export default filterByVeteran;
