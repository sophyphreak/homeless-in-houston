import React from 'react';
import BasicRadioButtons from '../BasicRadioButtons/BasicRadioButtons';

const Family = props => (
  <BasicRadioButtons
    label="Are you LGBT?"
    name="lgbt"
    choices={['Yes', 'No']}
    {...props}
  />
);

export default Family;
