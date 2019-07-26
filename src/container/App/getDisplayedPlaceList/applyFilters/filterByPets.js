const filterByPets = (displayedPlaceList, userHasPets) =>
  displayedPlaceList.filter(place => {
    if (place.pets === 'not okay' && userHasPets === 'Yes') {
      return false;
    }
    return true;
  });
export default filterByPets;
