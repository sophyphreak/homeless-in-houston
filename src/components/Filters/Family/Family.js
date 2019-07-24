import React from 'react';
import BasicRadioButtons from '../BasicRadioButtons/BasicRadioButtons';

const Family = props => (
  <BasicRadioButtons
    label="Do you have children with you now?"
    name="family"
    choices={['Yes', 'No']}
    {...props}
  />
);

export default Family;
