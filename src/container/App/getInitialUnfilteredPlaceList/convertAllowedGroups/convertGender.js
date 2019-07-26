const convertGender = rawGender => {
  if (rawGender.includes('all')) {
    return ['nonbinary', 'female', 'male'];
  }
  return rawGender;
};

export default convertGender;
