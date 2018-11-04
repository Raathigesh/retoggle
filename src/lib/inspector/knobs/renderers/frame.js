import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Label = styled.div`
  padding-right: 10px;
  color: #2196f3;
  font-size: 12px;
`;
const Value = styled.div``;

export default function KnobFrame({ label, children }) {
  return (
    <Container>
      <Label>{label}</Label>
      <Value>{children}</Value>
    </Container>
  );
}
