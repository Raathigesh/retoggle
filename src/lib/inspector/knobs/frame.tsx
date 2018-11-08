import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3px;
  padding-bottom: 3px;
  border-bottom: 1px solid #eaeaea;
  min-height: 25px;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
  color: #737576;
  font-size: 12px;
  width: 150px;
  min-width: 150px;

  span {
    margin-left: 3px;
  }

  svg {
    min-width: 11px;
  }
`;
const Value = styled.div`
  display: flex;
  flex-grow: 1;
`;

export default function KnobFrame({ icon, label, children }) {
  return (
    <Container>
      <Label>
        {icon}
        <span>{label}</span>
      </Label>
      <Value>{children}</Value>
    </Container>
  );
}
