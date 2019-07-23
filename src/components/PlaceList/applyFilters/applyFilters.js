import copy from 'utils-copy';
import filterByGender from './filterByGender';
import filterByAge from './filterByAge';

const applyFilters = (placeList, filters) => {
  const { gender, age } = filters;
  let localPlaceList = copy(placeList);
  localPlaceList = filterByGender(localPlaceList, gender);
  localPlaceList = filterByAge(localPlaceList, age);
  return localPlaceList;
};

export default applyFilters;
