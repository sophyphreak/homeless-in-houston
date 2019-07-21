// Use Basic Radio Button
import React from 'react';
import BasicRadioButtons from '../BasicRadioButtons/BasicRadioButtons';

const Pets = props => (
  <BasicRadioButtons
    label="Do you have any pets?"
    name="pets"
    choices={['yes', 'no']}
    {...props}
  />
);

export default Pets;
