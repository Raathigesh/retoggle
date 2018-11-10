import React from "react";
import styled from "styled-components";
import { Activity } from "react-feather";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import { KnobFrame } from "../../lib";

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 5px;

  svg {
    width: 100%;
    height: 50px;
  }
`;

export default function Chart({ data }) {
  console.log("data", data);
  return (
    <KnobFrame
      label="This is a custom knob"
      direction="column"
      icon={<Activity size={11} />}
    >
      <Container>
        <Sparklines data={data} limit={20}>
          <SparklinesLine color="#1c8cdc" />
          <SparklinesSpots />
        </Sparklines>
      </Container>
    </KnobFrame>
  );
}
