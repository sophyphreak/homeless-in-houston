const getCurrentPosition = () => {
  const success = pos => {
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    const currentPosition = { longitude, latitude };
    this.setState({ currentPosition });
  };
  const error = err => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };
  navigator.geolocation.getCurrentPosition(success, error);
};

export default getCurrentPosition;
