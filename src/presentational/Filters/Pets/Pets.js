import React from 'react';
import BasicRadioButtons from '../BasicRadioButtons/BasicRadioButtons';

const Pets = props => (
  <BasicRadioButtons
    label="Do you have any pets with you?"
    name="pets"
    choices={['Yes', 'No']}
    {...props}
  />
);

export default Pets;
