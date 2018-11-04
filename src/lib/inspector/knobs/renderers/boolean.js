import React from "react";
import KnobFrame from "./frame";

export default function ToggleComponent({ name, value, onChange }) {
  return (
    <KnobFrame label={name}>
      <input
        type="checkbox"
        defaultChecked={value}
        onChange={e => {
          onChange(e.target.checked);
        }}
      />
    </KnobFrame>
  );
}
