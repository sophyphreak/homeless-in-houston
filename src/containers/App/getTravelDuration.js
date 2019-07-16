import parseDuration from 'parse-duration';

const getTravelDuration = async ({
  placeList,
  service,
  origins,
  destinations,
  travelMode
}) => {
  try {
    await service.getDistanceMatrix(
      {
        origins,
        destinations,
        travelMode
      },
      response => {
        let typeOfTime;
        if (travelMode === 'WALKING') typeOfTime = 'walkingTime';
        if (travelMode === 'TRANSIT') typeOfTime = 'transitTime';
        for (let index = 0; index < destinations.length; index++) {
          const timeString = response.rows[0].elements[index].duration.text;
          placeList[index][typeOfTime] = {
            text: timeString,
            milliseconds: parseDuration(timeString)
          };
        }
      }
    );
    return placeList;
  } catch (e) {
    console.log(e);
  }
};

export default getTravelDuration;
