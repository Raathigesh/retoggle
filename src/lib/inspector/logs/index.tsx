import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { InspectorContext } from "../provider";
import Log from "./log";

const Container = styled.div``;

export default function Logs() {
  const [logs, setLogs] = useState({});
  const inspector = useContext(InspectorContext);
  useEffect(() => {
    if (inspector.haveLogs()) {
      setLogs({ ...inspector.getLogs() });
    }

    inspector.addLogSubscriber((log: any) => {
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
