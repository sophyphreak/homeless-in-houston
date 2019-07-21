// use Basic Radio Button
import React from 'react';
import BasicRadioButtons from '../BasicRadioButtons/BasicRadioButtons';

const Age = props => (
  <BasicRadioButtons
    label="What's your age?"
    name="age"
    choices={['under 18', '18-24', '25-64', '65 and over']}
    {...props}
  />
);

export default Age;
