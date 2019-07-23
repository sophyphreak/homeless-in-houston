import shelterList from './shelterList';

const getInitialPlaceList = (rawList = shelterList) =>
  rawList.map(rawPlace => {
    const { name } = rawPlace;
    const gender = {
      nonbinary: false,
      female: false,
      male: false
    };
    if (rawPlace.gender.includes('nonbinary')) {
      gender.nonbinary = true;
    }
    if (rawPlace.gender.includes('women')) {
      gender.women = true;
    }
    if (rawPlace.gender.includes('men')) {
      gender.male = true;
    }
    if (rawPlace.gender.includes('all')) {
      gender.male = true;
      gender.female = true;
      gender.nonbinary = true;
    }
    return { name, gender };
  });

export default getInitialPlaceList;
