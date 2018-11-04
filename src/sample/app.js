import React, { Component, useState } from "react";
import {
  Inspector,
  useLog,
  useBooleanKnob,
  useTextKnob,
  useNumberKnob,
  useRangeKnob,
  useRangesKnob,
  useSelectKnob,
  useTimemachine
} from "../lib";

export default function App() {
  const [obj, setValueObj] = useState({
    value: 5
  });
  useLog("Object 1", obj);
  const [value, setValue] = useState("hey");
  useLog("Object", value);
  const [toggleValue, setToggleValue] = useState(true);
  useLog("Toggle", toggleValue);
  const [stringValue, setStringValue] = useState("Hello world");
  useLog("Label Value", stringValue);
  const [booleanKnobValue] = useBooleanKnob("Debug toggle", true);
  const [text, setText] = useTextKnob("My Text box", "");
  const [textKnobValue] = useNumberKnob("Number of items");
  const [rangeKnobValue] = useRangeKnob("Range", {
    initialValue: 50
  });
  const [rangesKnobValue] = useRangesKnob("Range", {
    xAxis: { initialValue: 5 },
    yAxis: { initialValue: 9 }
  });
  const [selectKnobValue] = useSelectKnob("Select", ["one", "two"], "two");
  const timeControlled = useTimemachine("timemachine", value);
  return (
    <React.Fragment>
      <Inspector />
      <div className="App">{timeControlled}</div>
      <input type="text" onChange={e => setValue(e.target.value)} />
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      {booleanKnobValue && <div>Knob is ON</div>}
      {textKnobValue}
      {rangeKnobValue}
      {selectKnobValue}
      {JSON.stringify(rangesKnobValue)}
    </React.Fragment>
  );
}
