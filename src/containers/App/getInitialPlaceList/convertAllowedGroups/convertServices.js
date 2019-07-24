const convertServices = rawServices => {
  const services = {
    dayShelter: false,
    nightShelter: false
  };
  if (rawServices.includes('day shelter')) {
    services.nonbinary = true;
  }
  if (rawServices.includes('day shelter')) {
    services.female = true;
  }
  return services;
};

export default convertServices;
