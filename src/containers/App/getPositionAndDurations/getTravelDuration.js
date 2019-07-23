import parseDuration from 'parse-duration';

const getTravelDuration = ({
  placeList,
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
        const timeString = response.rows[0].elements[index].duration.text;
        placeList[index][typeOfTime] = {
          text: timeString,
          milliseconds: parseDuration(timeString)
        };
      }
      setState(() => ({ placeList }));
    }
  );
};

export default getTravelDuration;
