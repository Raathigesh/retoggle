import React from "react";
import KnobFrame from "./frame";

export default function TimeMachine({ name, value, min, max, onChange }) {
  return (
    <KnobFrame label={name}>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        onChange={e => {
          onChange(e.target.value);
        }}
      />
    </KnobFrame>
  );
}
