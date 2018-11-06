import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Sliders, Activity } from "react-feather";
import {
  haveKnobs,
  addKnobSubscriber,
  getKnobs,
  getKnobRenderer
} from "../state-handler";

const Container = styled.div`
  margin-top: 20px;
`;

const Title = styled.div`
  font-size: 14px;

  span {
    margin-left: 5px;
  }
`;

export default function Knobs() {
  const [knobs, setKnobs] = useState({});

  useEffect(() => {
    if (haveKnobs()) {
      setKnobs({ ...getKnobs() });
    }

    addKnobSubscriber((knob: any) => {
      setKnobs((previousKnobs: any) => ({
        ...previousKnobs,
        ...{ [knob.name]: knob }
      }));
    });
  }, []);

  return (
    <Container>
      <Title>
        <Sliders size={12} />
        <span>Knobs</span>
      </Title>
      {Object.entries(knobs).map(([name, knob]: any) => {
        const Component = getKnobRenderer(knob.type);
        return <Component {...knob} />;
      })}
    </Container>
  );
}
