import React from "react";
import { Clock } from "react-feather";
import { KnobFrame } from "../../inspector/knobs/frame";
import Slider from "../../components/slider";

interface Props {
  name: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

export default function TimeMachine({
  name,
  value,
  min,
  max,
  onChange
}: Props) {
  return (
    <KnobFrame label={name} icon={<Clock size={11} />}>
      <Slider value={value} min={min} max={max} onChange={onChange} />
    </KnobFrame>
  );
}
