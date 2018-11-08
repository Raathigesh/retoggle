import React from "react";
const { Checkbox } = require("@smooth-ui/core-sc");
import KnobFrame from "../../inspector/knobs/frame";

export default function ToggleComponent({ name, value, onChange }) {
  return (
    <KnobFrame label={name}>
      <Checkbox
        data-testid={name}
        defaultChecked={value}
        onChange={e => {
          onChange(e.target.checked);
        }}
      />
    </KnobFrame>
  );
}
