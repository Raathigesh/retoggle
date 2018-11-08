import React from "react";
const { Select } = require("@smooth-ui/core-sc");
import { List } from "react-feather";
import KnobFrame from "../../inspector/knobs/frame";

export default function SelectComponent({ name, value, options, onChange }) {
  return (
    <KnobFrame label={name} icon={<List size={11} />}>
      <Select
        size="sm"
        width="100%"
        control
        display="block"
        value={value}
        onChange={e => {
          onChange(e.target.value);
        }}
      >
        {options.map(option => (
          <option value={option}>{option}</option>
        ))}
      </Select>
    </KnobFrame>
  );
}
