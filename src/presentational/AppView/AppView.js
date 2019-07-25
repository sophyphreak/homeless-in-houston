import React from 'react';
import { Spinner } from 'reactstrap';

import FirstLoadCard from '../FirstLoadCard/FirstLoadCard';
import PlaceList from '../PlaceList/PlaceList';
import Filters from '../Filters/Filters';

const AppView = ({
  isFirstLoad,
  filters,
  displayedPlaceList,
  currentPosition,
  shareLocationClicked,
  onChooseFilter,
  travelTimesFinishedLoading
}) => (
  <>
    {isFirstLoad && <FirstLoadCard onClick={shareLocationClicked} />}
    {isFirstLoad || (
      <Filters filters={filters} onChooseFilter={onChooseFilter} />
    )}
    {isFirstLoad || travelTimesFinishedLoading || (
      <>
        <br />
        <Spinner style={{ marginLeft: '10em' }} color="purple" />
      </>
    )}
    <br />
    <br />
    <PlaceList
      displayedPlaceList={displayedPlaceList}
      currentPosition={currentPosition}
      filters={filters}
    />
  </>
);

export default AppView;
