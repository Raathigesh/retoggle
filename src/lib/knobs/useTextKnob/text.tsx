import React from "react";
const { Input } = require("@smooth-ui/core-sc");
import { Edit2 } from "react-feather";
import KnobFrame from "../../inspector/knobs/frame";

interface Props {
  name: string;
  value: string;
  onChange: (value: string) => void;
}

export default function TextComponent({ name, value, onChange }: Props) {
  return (
    <KnobFrame label={name} icon={<Edit2 size={11} />}>
      <Input
        type="text"
        width="100%"
        size="sm"
        value={value}
        onChange={(e: any) => {
          onChange(e.target.value);
        }}
      />
    </KnobFrame>
  );
}
