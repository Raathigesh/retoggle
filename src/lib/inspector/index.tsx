import React, { useState, useEffect, useContext } from "react";
import { createPortal } from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import { ChevronUp, ChevronDown } from "react-feather";
import Knobs from "./knobs";
import Logs from "./logs";
import { mount } from "./mount";
import ThemeContext, { DefaultTheme } from "./theme";

const GlobalReset = createGlobalStyle`* { box-sizing: border-box; }`;

const Container = styled.div<{ usePortal: boolean; background: string }>`
  display: flex;
  background-color: ${props => props.background};
  flex-direction: column;
  position: ${props => (props.usePortal ? "absolute" : "relative")};
  top: 0;
  right: 0;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  box-shadow: -3px 3px 23px -5px rgba(199, 199, 199, 0.87);
  overflow: auto;
`;

const CollapseHandle = styled.div`
  display: flex;
  justify-content: center;
  background-color: #dfdfdf;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 15px;
`;

interface Props {
  usePortal: boolean;
  width: string;
  height: string;
}

export default function Inspector({
  usePortal = true,
  width = "300px",
  height
}: Props) {
  const [isCollapsed, setCollapsed] = useState(false);
  const theme = useContext(ThemeContext);

  const handleExpandToggle = () => {
    localStorage.setItem("storyhooksIsCollapsed", (!isCollapsed).toString());
    setCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const isCollapsedLocalStorage =
      localStorage.getItem("storyhooksIsCollapsed") === "true";
    setCollapsed(isCollapsedLocalStorage);
  }, []);

  const content = (
    <ThemeContext.Provider value={DefaultTheme}>
      <GlobalReset />
      <Container
        background={theme.backgroundColor}
        usePortal={usePortal}
        style={{ width, height }}
      >
        {!isCollapsed && (
          <Content>
            <Logs />
            <Knobs />
          </Content>
        )}
        <CollapseHandle title="Collapse" onClick={handleExpandToggle}>
          {isCollapsed ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
        </CollapseHandle>
      </Container>
    </ThemeContext.Provider>
  );

  if (usePortal) {
    return createPortal(content, mount());
  }

  return content;
}
