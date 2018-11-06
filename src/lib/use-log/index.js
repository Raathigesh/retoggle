import React, { useEffect } from "react";
import { setLog, removeLog } from "../inspector/state-handler";

export default function useLog(name, value) {
  useEffect(
    () => {
      setLog({
        name,
        props: {
          name,
          value
        }
      });
    },
    [value]
  );

  useEffect(() => {
    return () => {
      removeLog(name);
    };
  }, []);
}
