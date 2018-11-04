import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { setLog } from "../inspector/global-state";

const Container = styled.div`
  font-size: 12px;
  display: flex;
  padding-bottom: 4px;
`;

const Name = styled.div`
  padding-right: 10px;
  color: #2196f3;
`;

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
