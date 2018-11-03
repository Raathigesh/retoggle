import React from "react";
import styled from "styled-components";
import Inspector from "react-inspector";

const Container = styled.div`
  font-size: 14px;
  display: flex;
`;
const Name = styled.div`
  font-weight: 700;
  padding-right: 10px;
  background-color: wheat;
`;
const Value = styled.div``;

export default function LogItem({ name, value }) {
  const renderer =
    typeof value === "object" ? <Inspector data={value} /> : value;

  return (
    <Container>
      <Name>{name}</Name>
      <Value>{renderer}</Value>
    </Container>
  );
}
