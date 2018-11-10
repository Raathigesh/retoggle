import React, { useState, useEffect, useContext } from "react";
import { createPortal } from "react-dom";
import { createGlobalStyle } from "styled-components";
import { mount } from "./mount";
import ThemeContext, { DefaultTheme, Theme } from "./theme";
import InspectorBody from "./inspector";

const GlobalReset = createGlobalStyle`* { box-sizing: border-box; }`;

interface Props {
  usePortal?: boolean;
  width?: string;
  height?: string;
  theme?: Theme;
}

export default function Inspector({
  usePortal = true,
  width = "300px",
  height,
  theme = DefaultTheme
}: Props) {
  const content = (
    <ThemeContext.Provider value={theme}>
      <GlobalReset />
      <InspectorBody width={width} height={height} usePortal={usePortal} />
    </ThemeContext.Provider>
  );

  if (usePortal) {
    return createPortal(content, mount());
  }

  return content;
}
