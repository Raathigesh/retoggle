import React, { SFC } from "react";
import { createPortal } from "react-dom";
import { createGlobalStyle } from "styled-components";
import { mount } from "./mount";
import ThemeContext, { DefaultTheme, Theme } from "./theme";
import InspectorBody from "./inspector";

const GlobalReset = createGlobalStyle`* { box-sizing: border-box; }`;

export interface Props {
  /**
   * Renders the inspector panel in a portal with fixed position
   * @default true
   */
  usePortal?: boolean;
  /**
   * Width of the inspector panel
   * @default 300px
   */
  width?: string;
  /**
   * Height of the inspector panel
   * @default auto
   */
  height?: string;
  /**
   * Theme of the inspector
   * @default DefaultTheme
   */
  theme?: Theme;
}

export const Inspector: SFC<Props> = ({
  usePortal = true,
  width = "300px",
  height,
  theme = DefaultTheme
}) => {
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
};
