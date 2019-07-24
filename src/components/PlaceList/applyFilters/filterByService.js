import camelCase from 'camelcase';

const filterByService = (localPlaceList, filterService) =>
  localPlaceList.filter(
    place => place.services[camelCase(filterService || '')]
  );
export default filterByService;
