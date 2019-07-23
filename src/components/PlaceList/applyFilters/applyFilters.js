import copy from 'utils-copy';
import filterByGender from './filterByGender';

const applyFilters = (placeList, filters) => {
  const { gender } = filters;
  let localPlaceList = copy(placeList);
  localPlaceList = filterByGender(localPlaceList, gender);
  return localPlaceList;
};

export default applyFilters;
