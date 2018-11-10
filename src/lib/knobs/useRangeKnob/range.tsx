import React from "react";
import { Sliders } from "react-feather";
import KnobFrame from "../../inspector/knobs/frame";
import Slider from "../../components/slider";

export interface Props {
  name: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

export default function ToggleComponent({
  name,
  value,
  min,
  max,
  onChange
}: Props) {
  return (
    <KnobFrame label={name} icon={<Sliders size={11} />}>
      <Slider value={value} min={min} max={max} onChange={onChange} />
    </KnobFrame>
  );
}
