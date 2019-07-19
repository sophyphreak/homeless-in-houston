import React from 'react';
import { Label, ButtonGroup, Button } from 'reactstrap';

const BasicRadioButtons = ({
  label,
  name,
  choices,
  radioSelected,
  onButtonClick
}) => (
  <>
    <Label>{label}</Label>
    <ButtonGroup>
      {choices.map((choice, index) => (
        <Button
          color="primary"
          key={index}
          onClick={() => onButtonClick({ radioSelected: choice, name })}
          active={radioSelected === choice}
        >
          {choice}
        </Button>
      ))}
    </ButtonGroup>
    <p>Selected: {radioSelected}</p>
  </>
);

export default BasicRadioButtons;
