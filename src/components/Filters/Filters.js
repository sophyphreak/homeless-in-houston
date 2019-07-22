import React from 'react';
import Gender from './Gender/Gender';
import Age from './Age/Age';
import LGBT from './LGBT/LGBT';
import Pets from './Pets/Pets';

const Filters = ({ onSelectFilter, filters: { gender, age, lgbt, pets } }) => (
  <>
    <Gender onSelectFilter={onSelectFilter} selected={gender} />
    <Age onSelectFilter={onSelectFilter} selected={age} />
    <LGBT onSelectFilter={onSelectFilter} selected={lgbt} />
    <Pets onSelectFilter={onSelectFilter} selected={pets} />
  </>
);

export default Filters;
