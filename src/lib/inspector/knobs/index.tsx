import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { InspectorContext } from "../provider";

const Container = styled.div``;

export default function Knobs() {
  const [knobs, setKnobs] = useState({});
  const inspector = useContext(InspectorContext);

  useEffect(() => {
    if (inspector.haveKnobs()) {
      setKnobs({ ...inspector.getKnobs() });
    }

    inspector.addKnobSubscriber((knob: any) => {
      setKnobs((previousKnobs: any) => ({
        ...previousKnobs,
        ...{ [knob.name]: knob }
      }));
    });
  }, []);

  if (Object.entries(knobs).length == 0) {
    return null;
  }

  return (
    <Container>
      {Object.entries(knobs).map(([name, knob]: any) => {
        const Component = inspector.getKnobRenderer(knob.type);
        return <Component key={knob.name} {...knob} />;
      })}
    </Container>
  );
}
