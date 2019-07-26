const convertServices = rawServices => {
  const services = {
    dayShelter: false,
    nightShelter: false
  };
  if (rawServices.includes('day shelter')) {
    services.dayShelter = true;
  }
  if (rawServices.includes('night shelter')) {
    services.nightShelter = true;
  }
  return services;
};

export default convertServices;
