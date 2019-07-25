import camelCase from 'camelcase';

const filterByService = (displayedPlaceList, filterService) =>
  displayedPlaceList.filter(
    place => place.services[camelCase(filterService || '')]
  );
export default filterByService;
