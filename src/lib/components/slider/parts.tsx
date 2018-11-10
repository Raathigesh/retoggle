import React from "react";
import {
  SliderItem,
  GetHandleProps,
  GetTrackProps
} from "react-compound-slider";

// *******************************************************
// HANDLE COMPONENT
// *******************************************************
interface IHandleProps {
  domain: number[];
  handle: SliderItem;
  getHandleProps: GetHandleProps;
  backgroundColor: string;
}

export const Handle: React.SFC<IHandleProps> = ({
  domain: [min, max],
  handle: { id, value, percent },
  getHandleProps,
  backgroundColor
}) => (
  <div
    role="slider"
    aria-valuemin={min}
    aria-valuemax={max}
    aria-valuenow={value}
    style={{
      left: `${percent}%`,
      position: "absolute",
      zIndex: 2,
      width: 6,
      marginLeft: "-3px",
      height: 15,
      cursor: "pointer",
      backgroundColor
    }}
    {...getHandleProps(id)}
  />
);

// *******************************************************
// TRACK COMPONENT
// *******************************************************
interface ITrackProps {
  source: SliderItem;
  target: SliderItem;
  getTrackProps: GetTrackProps;
  backgroundColor: string;
}

export const Track: React.SFC<ITrackProps> = ({
  source,
  target,
  getTrackProps,
  backgroundColor
}) => (
  <div
    style={{
      position: "absolute",
      height: 15,
      zIndex: 1,
      backgroundColor,
      borderRadius: 3,
      cursor: "pointer",
      left: `${source.percent}%`,
      width: `${target.percent - source.percent}%`
    }}
    {...getTrackProps()}
  />
);
