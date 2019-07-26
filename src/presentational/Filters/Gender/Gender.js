import React from 'react';
import BasicRadioButtons from '../BasicRadioButtons/BasicRadioButtons';

const Gender = props => (
  <BasicRadioButtons
    label="What's your gender?"
    name="gender"
    choices={['Nonbinary', 'Female', 'Male']}
    {...props}
  />
);

export default Gender;
