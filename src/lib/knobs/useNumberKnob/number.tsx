import React from "react";
import styled from "styled-components";
const { Input } = require("@smooth-ui/core-sc");
import KnobFrame from "../../inspector/knobs/frame";

/* const Input = styled.input`
  border: none;
  border-bottom: 1px solid #b1b1b1;
`;
 */
export default function TextComponent({ name, value, onChange }) {
  return (
    <KnobFrame label={name}>
      <Input
        size="sm"
        type="number"
        value={value}
        onChange={e => {
          onChange(Number(e.target.value));
        }}
      />
    </KnobFrame>
  );
}
