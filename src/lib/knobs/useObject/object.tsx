import React, { useContext } from "react";
import { Box } from "react-feather";
import ReactJson from "react-json-view";
import styled from "styled-components";
import KnobFrame from "../../inspector/knobs/frame";
import ThemeContext from "../../inspector/theme";

const Container = styled.div`
  font-size: 12px;
  margin-top: 5px;
  .key-modal-request {
    position: fixed !important;
  }
`;

interface Props {
  name: string;
  value: number;
  onChange: (value: any) => void;
}

export default function ObjectComponent({ name, value, onChange }: Props) {
  const {
    log: { label, objectViewerTheme }
  } = useContext(ThemeContext);

  return (
    <KnobFrame
      label={name}
      icon={<Box size={11} />}
      style={{ flexDirection: "column", alignItems: "flex-start" }}
    >
      <Container>
        <ReactJson
          src={value}
          theme={objectViewerTheme}
          onEdit={value => {
            onChange(value.updated_src);
          }}
          onAdd={value => {
            onChange(value.updated_src);
          }}
          onDelete={value => {
            onChange(value.updated_src);
          }}
        />
      </Container>
    </KnobFrame>
  );
}
