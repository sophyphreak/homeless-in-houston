import React from 'react';
import BasicRadioButtons from '../BasicRadioButtons/BasicRadioButtons';

const LGBT = props => (
  <BasicRadioButtons
    label="Are you LGBT?"
    name="lgbt"
    choices={['Yes', 'No']}
    {...props}
  />
);

export default LGBT;
