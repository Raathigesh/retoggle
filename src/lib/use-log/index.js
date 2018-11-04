import React, { useContext, useEffect, useState } from "react";
import { setLog } from "../inspector/global-state";

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
}
