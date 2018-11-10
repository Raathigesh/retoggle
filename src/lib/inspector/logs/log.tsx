import React, { useContext } from "react";
import styled from "styled-components";
import { Info } from "react-feather";
import ReactJson from "react-json-view";
import ThemeContext from "../theme";

const Container = styled.div<{ dividerColor: string }>`
  font-size: 12px;
  display: flex;
  justify-content: space-between;

  flex-direction: column;
  padding-top: 3px;
  padding-bottom: 3px;
  border-bottom: 1px solid ${props => props.dividerColor};
`;

const Name = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  padding-right: 10px;
  color: ${props => props.color};
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

function getRenderer(value: any, theme: string) {
  if (typeof value === "object") {
    return <ReactJson src={value} theme={theme} />;
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
  const {
    log: { label, objectViewerTheme }
  } = useContext(ThemeContext);
  const renderer = getRenderer(value, objectViewerTheme);
  return (
    <Container dividerColor={label.dividerColor}>
      <Name color={label.color}>
        <Info size={11} />
        <span>{name}</span>
      </Name>
      <Value>{renderer}</Value>
    </Container>
  );
}
