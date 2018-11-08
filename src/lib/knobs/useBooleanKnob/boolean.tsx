import React from "react";
const { Checkbox } = require("@smooth-ui/core-sc");
import { ToggleLeft } from "react-feather";
import styled from "styled-components";
import KnobFrame from "../../inspector/knobs/frame";

const SyledCheckBox = styled(Checkbox)`
  input:checked + .sui-checkbox-content {
    background-color: #4a27ff;
    border-color: transparent;
  }
`;

interface Props {
  name: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export default function ToggleComponent({ name, value, onChange }: Props) {
  return (
    <KnobFrame label={name} icon={<ToggleLeft size={11} />}>
      <SyledCheckBox
        size="sm"
        data-testid={name}
        defaultChecked={value}
        backgroundColor="purple"
        ml={-3.75}
        onChange={(e: any) => {
          onChange(e.target.checked);
        }}
      />
    </KnobFrame>
  );
}
