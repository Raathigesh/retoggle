import React, { useContext, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { ChevronUp, ChevronDown } from "react-feather";
import Knobs from "./knobs";
import Logs from "./logs";
import { mount } from "./mount";

const Container = styled.div`
  display: flex;
  background-color: #f8f7f6;
  flex-direction: column;
  width: 300px;
  position: ${props => (props.usePortal ? "absolute" : "relative")};
  top: 0;
  right: 0;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  box-shadow: -3px 3px 23px -5px rgba(199, 199, 199, 0.87);
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

export default function Inspector({ usePortal = true }) {
  const [isCollapsed, setCollapsed] = useState(false);

  const handleExpandToggle = () => {
    localStorage.setItem("storyhooksIsCollapsed", !isCollapsed);
    setCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const isCollapsedLocalStorage =
      localStorage.getItem("storyhooksIsCollapsed") === "true";
    setCollapsed(isCollapsedLocalStorage);
  }, []);

  const content = (
    <React.Fragment>
      <Container usePortal={usePortal}>
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
    </React.Fragment>
  );

  if (usePortal) {
    return createPortal(content, mount());
  }

  return content;
}
