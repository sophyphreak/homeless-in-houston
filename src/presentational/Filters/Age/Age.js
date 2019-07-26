import React from 'react';
import BasicRadioButtons from '../BasicRadioButtons/BasicRadioButtons';

const Age = props => (
  <BasicRadioButtons
    label="How old are you?"
    name="age"
    choices={['under 18', '18-24', '25-64', '65 and over']}
    {...props}
  />
);

export default Age;
