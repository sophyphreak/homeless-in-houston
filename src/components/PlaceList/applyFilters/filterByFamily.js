const filterByFamily = (localPlaceList, filterFamily) =>
  localPlaceList.filter(place => {
    if (place.family === 'no' && filterFamily === 'Yes') {
      return false;
    }
    return true;
  });
export default filterByFamily;
