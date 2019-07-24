import copy from 'utils-copy';
import filterByGender from './filterByGender';
import filterByAge from './filterByAge';
import filterByFamily from './filterByFamily';

const applyFilters = (placeList, filters) => {
  const { gender, age, family } = filters;
  let localPlaceList = copy(placeList);
  localPlaceList = filterByGender(localPlaceList, gender, family);
  localPlaceList = filterByFamily(localPlaceList, family);
  localPlaceList = filterByAge(localPlaceList, age);
  return localPlaceList;
};

export default applyFilters;
