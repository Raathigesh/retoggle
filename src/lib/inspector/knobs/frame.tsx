import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3px;
  padding-bottom: 3px;
  border-bottom: 1px solid #eaeaea;
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
