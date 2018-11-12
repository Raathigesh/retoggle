import React, { ReactElement, useContext, SFC } from "react";
import styled from "styled-components";
import ThemeContext from "../theme";

const Container = styled.div<{
  dividerColor: string;
  direction: "column" | "row";
}>`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: space-between;
  align-items: ${props => (props.direction === "row" ? "center" : "")};
  padding-top: 3px;
  padding-bottom: 3px;
  border-bottom: 1px solid ${props => props.dividerColor};
  min-height: 25px;
`;

const Label = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  padding-right: 10px;
  color: ${props => props.color};
  font-size: 12px;
  width: 150px;
  min-width: 150px;

  span {
    margin-left: 3px;
  }

  svg {
    min-width: 11px;
  }
`;
const Value = styled.div`
  display: flex;
  flex-grow: 1;
`;

export interface Props {
  /**
   * React element for icon
   */
  icon: React.ReactElement<any>;
  /**
   * Label for the frame
   */
  label: string;
  /**
   * Sets the flex direction of the frame. Valid values are "column" or "row"
   */
  direction?: "column" | "row";
  /**
   * The content of the frame. Your knob's component.
   */
  children: ReactElement<any>;

  /**
   * Style override for the frame container div.
   */
  style?: any;
}

export const KnobFrame: SFC<Props> = ({
  icon,
  label,
  children,
  style,
  direction = "row"
}) => {
  const {
    knob: { label: themeLabel }
  } = useContext(ThemeContext);

  return (
    <Container
      direction={direction}
      dividerColor={themeLabel.dividerColor}
      style={style}
    >
      <Label color={themeLabel.color}>
        {icon}
        <span>{label}</span>
      </Label>
      <Value>{children}</Value>
    </Container>
  );
};
