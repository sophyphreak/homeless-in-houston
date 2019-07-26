const filterByAge = (displayedPlaceList, userAge) =>
  displayedPlaceList.filter(place => place.age.includes(userAge.toLowerCase()));
export default filterByAge;
