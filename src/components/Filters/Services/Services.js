import React from 'react';
import BasicSelect from '../BasicSelect/BasicSelect';

const Services = props => (
  <BasicSelect
    label="What are you looking for?"
    name="service"
    choices={['Night Shelter', 'Day Shelter']}
    {...props}
  />
);

export default Services;
