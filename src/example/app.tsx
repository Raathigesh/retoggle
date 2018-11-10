import React from "react";
import styled from "styled-components";
import { Inspector, DarkTheme } from "../lib";
import Icon from "./icon";

const Container = styled.div``;

export default function App() {
  return (
    <Container>
      <Inspector />
      <Icon />
    </Container>
  );
}
