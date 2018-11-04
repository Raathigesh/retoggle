import React from "react";
import styled from "styled-components";
import Inspector, { chromeLight } from "react-inspector";

const Container = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3px;
  padding-bottom: 3px;
  border-bottom: 1px solid #eaeaea;
`;

const Name = styled.div`
  padding-right: 10px;
  color: #2196f3;
`;

const Title = styled.div`
  font-size: 14px;

  span {
    margin-left: 5px;
  }
`;

const Value = styled.div``;

function getRenderer(value) {
  if (typeof value === "object") {
    return (
      <Inspector
        data={value}
        theme={{ ...chromeLight, ...{ BASE_BACKGROUND_COLOR: "#f8f7f6" } }}
      />
    );
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
