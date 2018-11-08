import React from "react";
import styled from "styled-components";
const { Input } = require("@smooth-ui/core-sc");
import KnobFrame from "../../inspector/knobs/frame";

export default function TextComponent({ name, value, onChange }) {
  return (
    <KnobFrame label={name}>
      <Input
        type="text"
        width="100%"
        size="sm"
        value={value}
        onChange={e => {
          onChange(e.target.value);
        }}
      />
    </KnobFrame>
  );
}
