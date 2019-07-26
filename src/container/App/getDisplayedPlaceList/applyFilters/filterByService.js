const filterByService = (displayedPlaceList, selectedService) =>
  displayedPlaceList.filter(place =>
    place.services.includes(selectedService.toLowerCase())
  );
export default filterByService;
