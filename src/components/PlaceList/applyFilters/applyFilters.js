import copy from 'utils-copy';
import filterByGender from './filterByGender';
import filterByAge from './filterByAge';
import filterByFamily from './filterByFamily';
import filterByLGBT from './filterByLGBT';
import filterByPets from './filterByPets';
import filterByVeteran from './filterByVeteran';

const applyFilters = (placeList, filters) => {
  const { gender, family, age, lgbt, pets, veteran } = filters;
  let localPlaceList = copy(placeList);
  localPlaceList = filterByGender(localPlaceList, gender, family);
  localPlaceList = filterByFamily(localPlaceList, family);
  localPlaceList = filterByAge(localPlaceList, age);
  localPlaceList = filterByLGBT(localPlaceList, lgbt);
  localPlaceList = filterByPets(localPlaceList, pets);
  localPlaceList = filterByVeteran(localPlaceList, veteran);
  return localPlaceList;
};

export default applyFilters;
