import parseDuration from 'parse-duration';

const getTravelDuration = ({
  unfilteredPlaceList,
  service,
  origins,
  destinations,
  travelMode,
  setState
}) => {
  service.getDistanceMatrix(
    {
      origins,
      destinations,
      travelMode
    },
    response => {
      let typeOfTime;
      if (travelMode === 'WALKING') {
        typeOfTime = 'walkingTime';
      }
      if (travelMode === 'TRANSIT') {
        typeOfTime = 'transitTime';
      }
      for (let index = 0; index < destinations.length; index++) {
        const timeString = getTimeString(response, index);
        unfilteredPlaceList[index][typeOfTime] = {
          text: timeString,
          milliseconds: parseDuration(timeString)
        };
      }
      setState(() => ({ unfilteredPlaceList }));
    }
  );
};

const getTimeString = (response, index) =>
  response.rows[0].elements[index].duration.text;

export default getTravelDuration;
