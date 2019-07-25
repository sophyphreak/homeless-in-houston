import camelCase from 'camelcase';

const filterByAge = (localPlaceList, filterAge) =>
  localPlaceList.filter(place => {
    if (filterAge === '18-24' || filterAge === '25-64') {
      return place.age[filterAge || ''];
    }
    return place.age[camelCase(filterAge || '')];
  });
export default filterByAge;
