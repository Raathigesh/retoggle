import React from "react";
import KnobFrame from "../../inspector/knobs/frame";

export default function ToggleComponent({ name, value, min, max, onChange }) {
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
