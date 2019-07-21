import React from 'react';
import Gender from './Gender/Gender';
import Age from './Age/Age';
import LGBT from './LGBT/LGBT';
import Pets from './Pets/Pets';

const Filters = ({
  onFiltersRadioButtonClick,
  filters: { gender, age, lgbt, pets }
}) => (
  <>
    <Gender onButtonClick={onFiltersRadioButtonClick} radioSelected={gender} />
    <Age onButtonClick={onFiltersRadioButtonClick} radioSelected={age} />
    <LGBT onButtonClick={onFiltersRadioButtonClick} radioSelected={lgbt} />
    <Pets onButtonClick={onFiltersRadioButtonClick} radioSelected={pets} />
  </>
);

export default Filters;
