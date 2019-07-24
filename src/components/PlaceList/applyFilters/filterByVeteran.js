const filterByVeteran = (localPlaceList, filterVeteran) =>
  localPlaceList.filter(place => {
    if (filterVeteran !== 'Yes' && place.veteran) {
      return false;
    }
    return true;
  });
export default filterByVeteran;
