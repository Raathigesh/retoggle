import React from "react";
import KnobFrame from "./frame";

export default function TextComponent({ name, value, onChange }) {
  return (
    <KnobFrame label={name}>
      <input
        type="number"
        value={value}
        onChange={e => {
          onChange(Number(e.target.value));
        }}
      />
    </KnobFrame>
  );
}
