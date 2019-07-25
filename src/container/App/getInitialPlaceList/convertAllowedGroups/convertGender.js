const convertGender = rawGender => {
  const gender = {
    nonbinary: false,
    female: false,
    male: false
  };
  if (rawGender.includes('all')) {
    gender.male = true;
    gender.female = true;
    gender.nonbinary = true;
  }
  if (rawGender.includes('nonbinary')) {
    gender.nonbinary = true;
  }
  if (rawGender.includes('female')) {
    gender.female = true;
  }
  if (rawGender.includes('male')) {
    gender.male = true;
  }
  return gender;
};

export default convertGender;
