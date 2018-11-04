import React from "react";
import styled from "styled-components";
import Inspector from "react-inspector";

const Container = styled.div`
  font-size: 12px;
  display: flex;
  padding-bottom: 4px;
`;

const Name = styled.div`
  padding-right: 10px;
  color: #2196f3;
`;

const Value = styled.div``;

function getRenderer(value) {
  if (typeof value === "object") {
    return <Inspector data={value} />;
  } else if (typeof value === "boolean") {
    return value.toString();
  }
  return value;
}

export default function Log({ name, value }) {
  const renderer = getRenderer(value);

  return (
    <Container>
      <Name>{name}</Name>
      <Value>{renderer}</Value>
    </Container>
  );
}
