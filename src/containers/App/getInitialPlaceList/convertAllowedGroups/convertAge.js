const convertAge = rawAge => {
  const age = {
    under18: false,
    '18-24': false,
    '25-64': false,
    '65AndOver': false
  };
  if (rawAge.includes('all')) {
    age.under18 = true;
    age['18-24'] = true;
    age['25-64'] = true;
    age['65AndOver'] = true;
  }
  if (rawAge.includes('under 18')) {
    age.under18 = true;
  }
  if (rawAge.includes('female')) {
    age['18-24'] = true;
  }
  if (rawAge.includes('male')) {
    age['25-64'] = true;
  }
  if (rawAge.includes('male')) {
    age['65AndOver'] = true;
  }
  return age;
};

export default convertAge;
