import PromisedLocation from 'promised-location';

const getCurrentPosition = async () => {
  try {
    const locator = new PromisedLocation();
    const position = await locator;
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    return { latitude, longitude };
  } catch (err) {
    console.error('Position Error ', err.toString());
  }
};

export default getCurrentPosition;
