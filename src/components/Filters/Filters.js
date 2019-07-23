import React from 'react';
import Gender from './Gender/Gender';
import Age from './Age/Age';
import Family from './Family/Family';
import LGBT from './LGBT/LGBT';
import Pets from './Pets/Pets';
import Veteran from './Veteran/Veteran';

const Filters = ({
  onSelectFilter,
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
    <Gender onSelectFilter={onSelectFilter} selected={gender} />
    <Age onSelectFilter={onSelectFilter} selected={age} />
    <Family onSelectFilter={onSelectFilter} selected={family} />
    <LGBT onSelectFilter={onSelectFilter} selected={lgbt} />
    <Pets onSelectFilter={onSelectFilter} selected={pets} />
    <Veteran onSelectFilter={onSelectFilter} selected={veteran} />
  </>
);

export default Filters;
