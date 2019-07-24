import React from 'react';
import { Label, ButtonGroup, Button } from 'reactstrap';

const BasicRadioButtons = ({
  label,
  name,
  choices,
  selected,
  onChooseFilter
}) => (
  <>
    <Label>{label}</Label>
    <br />
    <ButtonGroup>
      {choices.map((choice, index) => (
        <Button
          color="primary"
          key={index}
          onClick={() => onChooseFilter({ selected: choice, name })}
          active={selected === choice}
        >
          {choice}
        </Button>
      ))}
    </ButtonGroup>
    <p>Selected: {selected}</p>
  </>
);

export default BasicRadioButtons;
