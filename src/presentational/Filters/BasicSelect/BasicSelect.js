import React from 'react';
import { Input, Label } from 'reactstrap';

const BasicSelect = ({ label, name, choices, selected, onChooseFilter }) => (
  <>
    <Label>{label}</Label>
    <br />
    <Input
      type="select"
      name={name}
      value={selected}
      onChange={({ target: { value } }) =>
        onChooseFilter({ selected: value, name })
      }
    >
      {choices.map((choice, key) => (
        <option key={key} value={choice}>
          {choice}
        </option>
      ))}
    </Input>
  </>
);

export default BasicSelect;
