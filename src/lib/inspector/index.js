import React, { useContext, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import Knobs from "./knobs";
import Logs from "./logs";
import { mount } from "./mount";

const Container = styled.div`
  display: flex;
  background-color: #f8f7f6;
  flex-direction: column;
  width: 300px;
  position: absolute;
  top: 0;
  right: 0;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  box-shadow: -3px 3px 23px -5px rgba(199, 199, 199, 0.87);
`;

const CollapseHandle = styled.div`
  display: flex;
  height: 8px;
  background-color: #dfdfdf;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 15px;
`;

export default function Inspector() {
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

  return createPortal(
    <React.Fragment>
      <Container>
        {!isCollapsed && (
          <Content>
            <Logs />
            <Knobs />
          </Content>
        )}
        <CollapseHandle title="Collapse" onClick={handleExpandToggle} />
      </Container>
    </React.Fragment>,
    mount()
  );
}
