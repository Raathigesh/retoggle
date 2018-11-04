import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Sliders, Activity } from "react-feather";
import Toggle from "./renderers/boolean";
import Text from "./renderers/text";
import Number from "./renderers/number";
import Range from "./renderers/range";
import Select from "./renderers/select";
import TimeMachine from "./renderers/timemachine";

const Container = styled.div`
  margin-top: 20px;
`;

const Title = styled.div`
  font-size: 14px;

  span {
    margin-left: 5px;
  }
`;

function getRenderer(label, props) {
  const type = props.type;

  switch (type) {
    case "boolean":
      return <Toggle {...props} />;
    case "text":
      return <Text {...props} />;
    case "number":
      return <Number {...props} />;
    case "range":
      return <Range {...props} />;
    case "select":
      return <Select {...props} />;
    case "timemachine":
      return <TimeMachine {...props} />;
    default:
      return null;
  }
}

export default function Knobs() {
  const [knobs, setKnobs] = useState({});

  useEffect(() => {
    if (window.knobs) {
      setKnobs(previousKnobs => ({ ...previousKnobs, ...window.knobs }));
    }

    window.setKnob = knob => {
      setKnobs(previousKnobs => ({
        ...previousKnobs,
        ...{ [knob.name]: knob }
      }));
    };
  }, []);

  return (
    <Container>
      <Title>
        <Sliders size={12} />
        <span>Knobs</span>
      </Title>
      {Object.entries(knobs).map(([name, knob]) => {
        return getRenderer(name, knob);
      })}
    </Container>
  );
}
