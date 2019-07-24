import shelterList from './shelterList';
import convertAllowedGroups from './convertAllowedGroups/convertAllowedGroups';

const getInitialPlaceList = (rawList = shelterList) =>
  rawList.map(rawPlace => {
    const { name } = rawPlace;
    const allowedGroups = convertAllowedGroups(rawPlace);
    return { name, ...allowedGroups };
  });

export default getInitialPlaceList;
