import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { UseLog } from "./context";

export default function useLog(name, value) {
  const context = useContext(UseLog);
  useEffect(
    () => {
      context.update(name, value);
    },
    [value]
  );
}
