import React, { useState, useEffect, useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ChevronUp, ChevronDown } from "react-feather";
import Knobs from "./knobs";
import Logs from "./logs";
import ThemeContext from "./theme";

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
  width: string;
  height: string;
  usePortal: boolean;
}

export default function Inspector({
  width = "300px",
  height,
  usePortal
}: Props) {
  const [isCollapsed, setCollapsed] = useState(false);
  const themeContext = useContext(ThemeContext);

  const handleExpandToggle = () => {
    localStorage.setItem("storyhooksIsCollapsed", (!isCollapsed).toString());
    setCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const isCollapsedLocalStorage =
      localStorage.getItem("storyhooksIsCollapsed") === "true";
    setCollapsed(isCollapsedLocalStorage);
  }, []);

  return (
    <Container
      background={themeContext.backgroundColor}
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
  );
}
