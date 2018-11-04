import React, { useState, useEffect } from "react";
import Log from "./log";

export default function Logs() {
  const [logs, setLogs] = useState({});
  useEffect(() => {
    if (window.logs) {
      setLogs(previousLogs => ({ ...previousLogs, ...window.logs }));
      delete window.logs;
    }

    window.setLog = log => {
      setLogs(previousLogs => ({
        ...previousLogs,
        ...{ [log.name]: log }
      }));
    };
  }, []);

  return Object.values(logs).map(log => <Log {...log.props} />);
}
