import React, { useState, useEffect } from "react";
import { Activity } from "react-feather";
import styled from "styled-components";
import { haveLogs, addLogSubscriber, getLogs } from "../state-handler";
import Log from "./log";

const Container = styled.div``;

export default function Logs() {
  const [logs, setLogs] = useState({});
  useEffect(() => {
    if (haveLogs()) {
      setLogs({ ...getLogs() });
    }

    addLogSubscriber((log: any) => {
      setLogs((previousLogs: any) => ({
        ...previousLogs,
        ...{ [log.name]: log }
      }));
    });
  }, []);

  if (Object.entries(logs).length == 0) {
    return null;
  }

  return (
    <Container>
      {Object.values(logs).map((log: any) => (
        <Log {...log.props} />
      ))}
    </Container>
  );
}
