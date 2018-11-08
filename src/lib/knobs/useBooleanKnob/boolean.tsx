import React from "react";
const { Checkbox } = require("@smooth-ui/core-sc");
import { ToggleLeft } from "react-feather";
import KnobFrame from "../../inspector/knobs/frame";
import styled from "styled-components";

const SyledCheckBox = styled(Checkbox)`
  input:checked + .sui-checkbox-content {
    background-color: #4a27ff;
    border-color: transparent;
  }
`;

export default function ToggleComponent({ name, value, onChange }) {
  return (
    <KnobFrame label={name} icon={<ToggleLeft size={11} />}>
      <SyledCheckBox
        size="sm"
        data-testid={name}
        defaultChecked={value}
        backgroundColor="purple"
        ml={-3.75}
        onChange={e => {
          onChange(e.target.checked);
        }}
      />
    </KnobFrame>
  );
}
