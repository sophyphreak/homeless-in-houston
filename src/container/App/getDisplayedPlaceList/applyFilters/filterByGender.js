import camelCase from 'camelcase';

const filterByGender = (displayedPlaceList, filterGender, filterFamily) =>
  // This makes sure males with children can still see services explicitly for families
  displayedPlaceList.filter(
    place =>
      place.gender[camelCase(filterGender || '')] ||
      (place.family === 'yes' && filterFamily === 'Yes')
  );
export default filterByGender;
