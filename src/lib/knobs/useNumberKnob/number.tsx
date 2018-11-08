import React from "react";
import { Hash } from "react-feather";
const { Input } = require("@smooth-ui/core-sc");
import KnobFrame from "../../inspector/knobs/frame";

/* const Input = styled.input`
  border: none;
  border-bottom: 1px solid #b1b1b1;
`;
 */
export default function TextComponent({ name, value, onChange }) {
  return (
    <KnobFrame label={name} icon={<Hash size={11} />}>
      <Input
        size="sm"
        type="number"
        value={value}
        width="100%"
        onChange={e => {
          onChange(Number(e.target.value));
        }}
      />
    </KnobFrame>
  );
}
