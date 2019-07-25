import React from 'react';
import BasicRadioButtons from '../BasicRadioButtons/BasicRadioButtons';

const Veteran = props => (
  <BasicRadioButtons
    label="Are you a veteran?"
    name="veteran"
    choices={['Yes', 'No']}
    {...props}
  />
);

export default Veteran;
