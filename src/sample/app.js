import React, { Component, useState } from "react";
import {
  Inspector,
  useLog,
  useBooleanKnob,
  useTextKnob,
  useNumberKnob,
  useRangeKnob
} from "../lib";

export default function App() {
  const [value, setValue] = useState("hey");
  useLog("Object", value);
  const [toggleValue, setToggleValue] = useState(true);
  useLog("Toggle", toggleValue);
  const [stringValue, setStringValue] = useState("Hello world");
  useLog("Label Value", stringValue);
  const [booleanKnobValue] = useBooleanKnob("Debug toggle", true);
  const [textKnobValue] = useNumberKnob("Number of items");
  const [rangeKnobValue] = useRangeKnob("Range", {
    initialValue: 50
  });
  return (
    <React.Fragment>
      <Inspector />
      <div className="App">{value}</div>
      <input type="text" onChange={e => setValue(e.target.value)} />
      {booleanKnobValue && <div>Knob is ON</div>}
      {textKnobValue}
      {rangeKnobValue}
    </React.Fragment>
  );
}
