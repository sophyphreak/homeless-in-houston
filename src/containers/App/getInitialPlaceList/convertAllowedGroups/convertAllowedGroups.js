import convertGender from './convertGender';
import convertAge from './convertAge';

const convertAllowedGroups = ({ gender: rawGender, age: rawAge, ...rest }) => {
  const gender = convertGender(rawGender);
  const age = convertAge(rawAge);
  const allowedGroups = {
    gender,
    age,
    ...rest
  };
  return allowedGroups;
};

export default convertAllowedGroups;
