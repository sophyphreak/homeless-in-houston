import React from 'react';
import Gender from './Gender/Gender';
import Age from './Age/Age';

const Filters = ({ onFiltersRadioButtonClick, filters: { gender, age } }) => (
  <>
    <Gender onButtonClick={onFiltersRadioButtonClick} radioSelected={gender} />
    <br />
    <Age onButtonClick={onFiltersRadioButtonClick} radioSelected={age} />
  </>
);

export default Filters;
