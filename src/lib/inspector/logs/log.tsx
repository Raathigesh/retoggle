import React from "react";
import styled from "styled-components";
import { Info } from "react-feather";
import Inspector, { chromeLight } from "react-inspector";
import ReactJson from "react-json-view";

const Container = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: space-between;

  flex-direction: column;
  padding-top: 3px;
  padding-bottom: 3px;
  border-bottom: 1px solid #eaeaea;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
  color: #737576;
  width: 150px;
  min-width: 150px;
  margin-bottom: 5px;

  span {
    margin-left: 3px;
  }
`;

const Value = styled.div`
  display: flex;
  flex-grow: 1;
  overflow: auto;
`;

function getRenderer(value: any) {
  if (typeof value === "object") {
    return (
      <ReactJson
        src={value}
        theme={{ ...chromeLight, ...{ BASE_BACKGROUND_COLOR: "#f8f7f6" } }}
      />
    );
  } else if (typeof value === "boolean") {
    return value.toString();
  }
  return value;
}

interface Props {
  name: string;
  value: any;
}

export default function Log({ name, value }: Props) {
  const renderer = getRenderer(value);

  return (
    <Container>
      <Name>
        <Info size={11} />
        <span>{name}</span>
      </Name>
      <Value>{renderer}</Value>
    </Container>
  );
}
