import React from "react";
import styled from "styled-components";
import { Inspector } from "../lib";
import Icon from "./icon";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 97vh;
`;

export default function App() {
  return (
    <Container>
      <Inspector />
      <Icon />
    </Container>
  );
}
