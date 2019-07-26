const filterByGender = (displayedPlaceList, userGender, userHasFamily) =>
  displayedPlaceList.filter(
    place =>
      isIncludedGender(place, userGender) ||
      hasFamilyInFamilySpecific(place, userHasFamily)
      // This makes sure males with children can still see services explicitly for families
  );

const isIncludedGender = (place, userGender) =>
  place.gender.includes(userGender.toLowerCase());
const hasFamilyInFamilySpecific = (place, userHasFamily) =>
  place.family === 'specific' && userHasFamily === 'Yes';

export default filterByGender;
