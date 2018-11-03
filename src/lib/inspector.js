import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UseLog } from "./context";
import LogItem from "./log-item";

const Container = styled.div`
  display: flex;
  background-color: #f8f7f6;
  width: 300px;
  position: absolute;
  top: 0;
  right: 0;

  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  box-shadow: -3px 3px 23px -5px rgba(199, 199, 199, 0.87);
`;

const CollapseHandle = styled.div`
  display: flex;
  width: 10px;
  background-color: #dfdfdf;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 15px;
`;

export default function Inspector({ children }) {
  const handleUpdate = (name, value) => {
    const newState = {
      entries: {
        ...useLogState.entries,
        [name]: value
      },
      update: handleUpdate
    };
    setLogState(newState);
  };

  const [useLogState, setLogState] = useState({
    entries: {},
    update: handleUpdate
  });
  return (
    <UseLog.Provider value={useLogState}>
      <Container>
        <CollapseHandle title="Collapse" />
        <Content>
          {Object.entries(useLogState.entries).map(([key, value]) => {
            return <LogItem name={key} value={value} />;
          })}
        </Content>
      </Container>
      {children}
    </UseLog.Provider>
  );
}
