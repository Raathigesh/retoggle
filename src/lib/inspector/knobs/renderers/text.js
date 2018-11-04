import React from "react";
import styled from "styled-components";
import KnobFrame from "./frame";

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #b1b1b1;
`;

export default function TextComponent({ name, value, onChange }) {
  return (
    <KnobFrame label={name}>
      <Input
        type="text"
        value={value}
        onChange={e => {
          onChange(e.target.value);
        }}
      />
    </KnobFrame>
  );
}
