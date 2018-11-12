import React from "react";
import { Hash } from "react-feather";
const { Input } = require("@smooth-ui/core-sc");
import { KnobFrame } from "../../inspector/knobs/frame";

interface Props {
  name: string;
  value: number;
  onChange: (value: number) => void;
}

export default function TextComponent({ name, value, onChange }: Props) {
  return (
    <KnobFrame label={name} icon={<Hash size={11} />}>
      <Input
        size="sm"
        type="number"
        value={value}
        width="100%"
        onChange={(e: any) => {
          onChange(Number(e.target.value));
        }}
      />
    </KnobFrame>
  );
}
