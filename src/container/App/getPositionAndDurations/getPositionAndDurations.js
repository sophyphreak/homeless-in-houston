import loadGoogleMapsApi from 'load-google-maps-api';
import getCurrentPosition from './getCurrentPosition';
import getTravelDuration from './getTravelDuration';

const getPositionAndDurations = async ({
  currentPosition,
  unfilteredPlaceList,
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
    const destinations = eachNameWithHoustonAtEnd(unfilteredPlaceList);
    const service = new googleMaps.DistanceMatrixService();
    const getTravelDurationArgs = {
      unfilteredPlaceList,
      service,
      origins,
      destinations,
      setState
    };
    getTravelDuration({
      travelMode: 'WALKING',
      ...getTravelDurationArgs
    });
    getTravelDuration({
      travelMode: 'TRANSIT',
      ...getTravelDurationArgs
    });
  } catch (e) {
    console.log('ERROR:', e);
  }
};

const eachNameWithHoustonAtEnd = unfilteredPlaceList =>
  unfilteredPlaceList.map(({ name }) => name + ' Houston');

export default getPositionAndDurations;
