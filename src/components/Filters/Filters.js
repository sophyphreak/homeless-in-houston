import React from 'react';
import Gender from './Gender/Gender';
import Age from './Age/Age';
import LGBT from './LGBT/LGBT';

const Filters = ({
  onFiltersRadioButtonClick,
  filters: { gender, age, lgbt }
}) => (
  <>
    <Gender onButtonClick={onFiltersRadioButtonClick} radioSelected={gender} />
    <Age onButtonClick={onFiltersRadioButtonClick} radioSelected={age} />
    <LGBT onButtonClick={onFiltersRadioButtonClick} radioSelected={lgbt} />
  </>
);

export default Filters;
