import copy from 'utils-copy';
import filterByGender from './filterByGender';
import filterByAge from './filterByAge';
import filterByFamily from './filterByFamily';
import filterByLGBT from './filterByLGBT';
import filterByPets from './filterByPets';
import filterByVeteran from './filterByVeteran';
import filterByService from './filterByService';

const applyFilters = (placeList, filters) => {
  const { gender, family, age, lgbt, pets, veteran, service } = filters;
  let displayedPlaceList = copy(placeList);
  displayedPlaceList = filterByGender(displayedPlaceList, gender, family);
  displayedPlaceList = filterByFamily(displayedPlaceList, family);
  displayedPlaceList = filterByAge(displayedPlaceList, age);
  displayedPlaceList = filterByLGBT(displayedPlaceList, lgbt);
  displayedPlaceList = filterByPets(displayedPlaceList, pets);
  displayedPlaceList = filterByVeteran(displayedPlaceList, veteran);
  displayedPlaceList = filterByService(displayedPlaceList, service);
  return displayedPlaceList;
};

export default applyFilters;
