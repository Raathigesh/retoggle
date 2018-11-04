import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Toggle from "./renderers/boolean";
import Text from "./renderers/text";
import Number from "./renderers/number";
import Range from "./renderers/range";

const Container = styled.div``;

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
    default:
      return null;
  }
}

export default function Knobs() {
  const [knobs, setKnobs] = useState({});

  useEffect(() => {
    if (window.knobs) {
      setKnobs(previousKnobs => ({ ...previousKnobs, ...window.knobs }));
      delete window.knobs;
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
      {Object.entries(knobs).map(([name, knob]) => {
        return getRenderer(name, knob);
      })}
    </Container>
  );
}
