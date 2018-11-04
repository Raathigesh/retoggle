import React, { useEffect } from "react";
import { setLog, removeLog } from "../inspector/global-state";

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
