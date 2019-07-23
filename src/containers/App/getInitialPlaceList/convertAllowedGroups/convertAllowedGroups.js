import convertGender from './convertGender';

const convertAllowedGroups = ({ gender: rawGender }) => {
  const gender = convertGender(rawGender);
  return { gender };
};

export default convertAllowedGroups;
