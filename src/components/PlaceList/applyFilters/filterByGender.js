import camelCase from 'camelcase';

const filterByGender = (localPlaceList, filterGender) =>
  localPlaceList.filter(place => place.gender[camelCase(filterGender || '')]);
export default filterByGender;
