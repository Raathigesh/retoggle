import React from "react";
import KnobFrame from "../../inspector/knobs/frame";
import Slider from "../../components/slider";

export default function TimeMachine({ name, value, min, max, onChange }) {
  return (
    <KnobFrame label={name}>
      <Slider value={value} min={min} max={max} onChange={onChange} />
    </KnobFrame>
  );
}
