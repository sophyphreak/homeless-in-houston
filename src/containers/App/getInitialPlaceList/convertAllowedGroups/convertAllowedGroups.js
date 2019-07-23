import convertGender from './convertGender';
import convertAge from './convertAge';

const convertAllowedGroups = ({ gender: rawGender, age: rawAge }) => {
  const gender = convertGender(rawGender);
  const age = convertAge(rawAge);
  const allowedGroups = {
    gender,
    age
  };
  return allowedGroups;
};

export default convertAllowedGroups;
