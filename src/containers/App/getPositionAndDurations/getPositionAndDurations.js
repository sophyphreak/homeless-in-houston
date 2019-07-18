import loadGoogleMapsApi from 'load-google-maps-api';
import getCurrentPosition from './getCurrentPosition';
import getTravelDuration from './getTravelDuration';

const getPositionAndDurations = async ({
  currentPosition,
  placeList,
  setState
}) => {
  try {
    currentPosition = await getCurrentPosition();
    setState(() => ({ currentPosition }));
    const googleMaps = await loadGoogleMapsApi({
      key: process.env.GOOGLE_MAPS_KEY
    });
    const { latitude, longitude } = currentPosition;
    const origins = [new googleMaps.LatLng(latitude, longitude)];
    const destinations = eachNameWithHoustonAtEnd(placeList);
    const service = new googleMaps.DistanceMatrixService();
    getTravelDuration({
      placeList,
      service,
      origins,
      destinations,
      travelMode: 'WALKING',
      setState
    });
    getTravelDuration({
      placeList,
      service,
      origins,
      destinations,
      travelMode: 'TRANSIT',
      setState
    });
  } catch (e) {
    console.log('ERROR:', e);
  }
};

const eachNameWithHoustonAtEnd = placeList =>
  placeList.map(({ name }) => name + ' Houston');

export default getPositionAndDurations;
