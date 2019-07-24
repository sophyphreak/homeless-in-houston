import convertGender from './convertGender';
import convertAge from './convertAge';

const convertAllowedGroups = ({
  gender: rawGender,
  age: rawAge,
  services: rawServices,
  ...rest
}) => {
  const gender = convertGender(rawGender);
  const age = convertAge(rawAge);
  const services = convertServices(rawServices);
  const allowedGroups = {
    gender,
    age,
    services,
    ...rest
  };
  return allowedGroups;
};

export default convertAllowedGroups;
