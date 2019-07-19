import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';

// Make it, then use BasicRadioButton

const Gender = props => (
  <>
    <h5>What's your gender?</h5>
    <ButtonGroup>
      <Button
        color="primary"
        onClick={() => props.onRadioBtnClick('nonbinary')}
        active={props.rSelected === 'nonbinary'}
      >
        Nonbinary
      </Button>
      <Button
        color="primary"
        onClick={() => props.onRadioBtnClick('female')}
        active={props.rSelected === 'female'}
      >
        Female
      </Button>
      <Button
        color="primary"
        onClick={() => props.onRadioBtnClick('male')}
        active={props.rSelected === 'male'}
      >
        Male
      </Button>
    </ButtonGroup>
    <p>Selected: {props.rSelected}</p>
  </>
);

export default Gender;
