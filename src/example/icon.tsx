import React, { useState } from "react";
import styled from "styled-components";
import { Feather } from "react-feather";
import { Ghost } from "react-kawaii";
import {
  Inspector,
  useLog,
  useBooleanKnob,
  useTextKnob,
  useNumberKnob,
  useRangeKnob,
  useRangesKnob,
  useSelectKnob,
  useTimemachine,
  useColorKnob,
  useObjectKnob
} from "../lib";
import useChartKnob from "./custom-chart-knob";

const Container = styled.div`
  background-color: #3356d0;
  flex-direction: column;
  display: flex;
  padding: 15px;
  margin: 5px;
  border-radius: 5px;
  width: 400px;
  height: 400px;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(195, 22, 22, 0.03) 0px 0px 5px,
    rgba(63, 81, 181, 0.55) 10px 13px 47px;
`;

const InputBox = styled.input`
  font-size: 25px;
  border-radius: 5px;
  border: none;
  margin-top: 20px;
`;

export default function Icon() {
  const [textValue, setTextValue] = useState({
    text: ""
  });

  const [visibility] = useBooleanKnob("Icon Visibility", true);

  useLog("Visibility", {
    visibility
  });

  const [borderWidth] = useNumberKnob("Border Width");
  const [rangeKnobValue] = useRangeKnob("Ghost Size", {
    initialValue: 240,
    min: 0,
    max: 500
  });
  const [mood] = useSelectKnob(
    "Mood",
    ["sad", "shocked", "happy", "blissful", "lovestruck", "excited"],
    "blissful"
  );
  const [colorValue] = useColorKnob("Color", "wheat");
  const [obj, setObj] = useObjectKnob("Object", {});
  const timemachineValue = useTimemachine("Textbox timemachine", colorValue);
  useChartKnob("Chart", timemachineValue);

  return (
    <Container
      style={{ borderWidth, borderStyle: "solid", borderColor: "white" }}
    >
      {visibility && (
        <Ghost size={rangeKnobValue} mood={mood} color={timemachineValue} />
      )}
    </Container>
  );
}
