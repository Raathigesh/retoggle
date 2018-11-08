import React from "react";
import { Sliders } from "react-feather";
import KnobFrame from "../../inspector/knobs/frame";
import Slider from "../../components/slider";

export default function ToggleComponent({ name, value, min, max, onChange }) {
  return (
    <KnobFrame label={name} icon={<Sliders size={11} />}>
      <Slider value={value} min={min} max={max} onChange={onChange} />
    </KnobFrame>
  );
}
