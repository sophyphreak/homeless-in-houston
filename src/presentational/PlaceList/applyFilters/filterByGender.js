import camelCase from 'camelcase';

const filterByGender = (localPlaceList, filterGender, filterFamily) =>
  // This makes sure males with children can still see services explicitly for families
  localPlaceList.filter(
    place =>
      place.gender[camelCase(filterGender || '')] ||
      (place.family === 'yes' && filterFamily === 'Yes')
  );
export default filterByGender;
