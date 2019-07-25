import React from 'react';
import { Spinner } from 'reactstrap';

import FirstLoadCard from '../FirstLoadCard/FirstLoadCard';
import PlaceList from '../PlaceList/PlaceList';
import Filters from '../Filters/Filters';
import travelTimesHaveLoaded from './travelTimesHaveLoaded';

const AppView = ({
  isFirstLoad,
  filters,
  placeList,
  currentPosition,
  shareLocationClicked,
  onChooseFilter
}) => (
  <>
    {isFirstLoad && <FirstLoadCard onClick={shareLocationClicked} />}
    {isFirstLoad || (
      <Filters filters={filters} onChooseFilter={onChooseFilter} />
    )}
    {isFirstLoad || travelTimesHaveLoaded(placeList) || (
      <>
        <br />
        <Spinner style={{ marginLeft: '10em' }} color="purple" />
      </>
    )}
    <br />
    <br />
    <PlaceList
      placeList={placeList}
      currentPosition={currentPosition}
      filters={filters}
    />
  </>
);

export default AppView;
