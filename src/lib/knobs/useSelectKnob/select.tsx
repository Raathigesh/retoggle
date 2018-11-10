import React from "react";
const { Select } = require("@smooth-ui/core-sc");
import { List } from "react-feather";
import KnobFrame from "../../inspector/knobs/frame";

interface Props {
  name: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export default function SelectComponent({
  name,
  value,
  options,
  onChange
}: Props) {
  return (
    <KnobFrame label={name} icon={<List size={11} />}>
      <Select
        size="sm"
        width="100%"
        control
        display="block"
        value={value}
        onChange={(e: any) => {
          onChange(e.target.value);
        }}
      >
        {options.map(option => (
          <option value={option}>{option}</option>
        ))}
      </Select>
    </KnobFrame>
  );
}
