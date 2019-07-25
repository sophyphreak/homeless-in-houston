const filterByVeteran = (displayedPlaceList, filterVeteran) =>
  displayedPlaceList.filter(place => {
    if (filterVeteran !== 'Yes' && place.veteran) {
      return false;
    }
    return true;
  });
export default filterByVeteran;
