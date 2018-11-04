import React from "react";
import KnobFrame from "./frame";

export default function TextComponent({ name, value, onChange }) {
  return (
    <KnobFrame label={name}>
      <input
        type="text"
        value={value}
        onChange={e => {
          onChange(e.target.value);
        }}
      />
    </KnobFrame>
  );
}
