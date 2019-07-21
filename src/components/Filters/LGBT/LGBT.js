// Use Basic Radio Button
import React from 'react';
import BasicRadioButtons from '../BasicRadioButtons/BasicRadioButtons';

const LGBT = props => (
  <BasicRadioButtons
    label="LGBT?"
    name="lgbt"
    choices={['yes', 'no']}
    {...props}
  />
);

export default LGBT;
