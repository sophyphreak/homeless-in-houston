import camelCase from 'camelcase';

const filterByGender = (localPlaceList, gender) =>
  localPlaceList.filter(place => place.gender[camelCase(gender || '')]);
export default filterByGender;
