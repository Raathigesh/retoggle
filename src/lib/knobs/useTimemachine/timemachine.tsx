import React from "react";
import { Clock } from "react-feather";
import KnobFrame from "../../inspector/knobs/frame";
import Slider from "../../components/slider";

export default function TimeMachine({ name, value, min, max, onChange }) {
  return (
    <KnobFrame label={name} icon={<Clock size={11} />}>
      <Slider value={value} min={min} max={max} onChange={onChange} />
    </KnobFrame>
  );
}
