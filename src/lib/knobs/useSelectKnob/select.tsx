import React from "react";
import KnobFrame from "../../inspector/knobs/frame";

export default function SelectComponent({ name, value, options, onChange }) {
  return (
    <KnobFrame label={name}>
      <select
        value={value}
        onChange={e => {
          onChange(e.target.value);
        }}
      >
        {options.map(option => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </KnobFrame>
  );
}
