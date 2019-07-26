const convertAge = rawAge => {
  if (rawAge.includes('all')) {
    return ['under 18', '18-24', '25-64', '65 and over'];
  }
  return rawAge;
};

export default convertAge;
