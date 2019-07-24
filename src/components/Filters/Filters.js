import React from 'react';
import Gender from './Gender/Gender';
import Age from './Age/Age';
import Family from './Family/Family';
import LGBT from './LGBT/LGBT';
import Pets from './Pets/Pets';
import Veteran from './Veteran/Veteran';

const Filters = ({
  onChooseFilter,
  filters: {
    gender = '',
    family = '',
    age = '',
    lgbt = '',
    pets = '',
    veteran = ''
  }
}) => (
  <>
    <Gender onChooseFilter={onChooseFilter} selected={gender} />
    <Age onChooseFilter={onChooseFilter} selected={age} />
    <Family onChooseFilter={onChooseFilter} selected={family} />
    <LGBT onChooseFilter={onChooseFilter} selected={lgbt} />
    <Pets onChooseFilter={onChooseFilter} selected={pets} />
    <Veteran onChooseFilter={onChooseFilter} selected={veteran} />
  </>
);

export default Filters;
