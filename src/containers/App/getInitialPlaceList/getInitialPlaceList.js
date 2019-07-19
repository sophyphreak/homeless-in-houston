import shelterList from './shelterList';

const getInitialPlaceList = (rawList = shelterList) =>
  rawList.map(raw => {
    const { name } = raw;
    let gender = {};
    if (raw.gender.includes === 'all') {
      gender.male = true;
      gender.female = true;
      gender.nonbinary = true;
    } else {
      if (raw.gender.includes('men')) {
        gender.male = true;
      } else {
        gender.male = false;
      }
      if (raw.gender.includes('women')) {
        gender.female = true;
      } else {
        gender.female = false;
      }
      if (raw.gender.includes('nonbinary')) {
        gender.nonbinary = true;
      } else {
        gender.nonbinary = false;
      }
    }
    return { name, gender };
  });

export default getInitialPlaceList;
