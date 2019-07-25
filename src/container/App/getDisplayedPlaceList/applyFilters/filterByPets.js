const filterByPets = (displayedPlaceList, filterPets) =>
  displayedPlaceList.filter(place => {
    if (filterPets === 'Yes' && !place.pets) {
      return false;
    }
    return true;
  });
export default filterByPets;
