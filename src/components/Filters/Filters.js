import React from 'react';
import Gender from './Gender/Gender';

const Filters = ({ onFiltersRadioButtonClick, filters: { gender } }) => (
  <>
    <Gender onButtonClick={onFiltersRadioButtonClick} radioSelected={gender} />
  </>
);

export default Filters;
