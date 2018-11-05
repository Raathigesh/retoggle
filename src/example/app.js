import React, { Component, useState } from "react";
import styled from "styled-components";
import { Feather, Activity } from "react-feather";
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
import Icon from "./icon";
import Search from "./search";

const Container = styled.div``;

export default function App() {
  return (
    <Container>
      <Inspector />
      <Icon />
    </Container>
  );
}
