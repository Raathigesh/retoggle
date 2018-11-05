import React, { Component, useState } from "react";
import styled from "styled-components";
import { Feather } from "react-feather";
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
  const timemachineValue = useTimemachine("Textbox timemachine", textValue);
  useLog("Text box value", timemachineValue);

  const [borderWidth] = useNumberKnob("Border Width");
  const [rangeKnobValue] = useRangeKnob("Icon Size", {
    initialValue: 85,
    min: 0,
    max: 250
  });
  const [color] = useSelectKnob("Select", ["white", "wheat"], "white");

  return (
    <Container
      style={{ borderWidth, borderStyle: "solid", borderColor: "white" }}
    >
      {visibility && <Feather size={rangeKnobValue} color={color} />}
      <InputBox
        type="text"
        value={timemachineValue && timemachineValue.text}
        onChange={e =>
          setTextValue({
            text: e.target.value
          })
        }
      />
    </Container>
  );
}
