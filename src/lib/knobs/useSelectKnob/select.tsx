import React from "react";
const { Select } = require("@smooth-ui/core-sc");
import KnobFrame from "../../inspector/knobs/frame";

export default function SelectComponent({ name, value, options, onChange }) {
  return (
    <KnobFrame label={name}>
      <Select
        size="sm"
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
