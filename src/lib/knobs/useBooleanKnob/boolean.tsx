import React from "react";
import { useContext } from "react";
const { Checkbox } = require("@smooth-ui/core-sc");
import { ToggleLeft } from "react-feather";
import styled from "styled-components";
import KnobFrame from "../../inspector/knobs/frame";
import ThemeContext from "../../inspector/theme";

const SyledCheckBox = styled(Checkbox)<{ background: string }>`
  input:checked + .sui-checkbox-content {
    background-color: ${props => props.background};
    border-color: transparent;
  }
`;

interface Props {
  name: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export default function ToggleComponent({ name, value, onChange }: Props) {
  const theme = useContext(ThemeContext);
  return (
    <KnobFrame label={name} icon={<ToggleLeft size={11} />}>
      <SyledCheckBox
        size="sm"
        data-testid={name}
        defaultChecked={value}
        background={theme.primaryColor}
        ml={-3.75}
        onChange={(e: any) => {
          onChange(e.target.checked);
        }}
      />
    </KnobFrame>
  );
}
