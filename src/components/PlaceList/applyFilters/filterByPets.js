const filterByPets = (localPlaceList, filterPets) =>
  localPlaceList.filter(place => {
    if (filterPets === 'Yes' && !place.pets) {
      return false;
    }
    return true;
  });
export default filterByPets;
