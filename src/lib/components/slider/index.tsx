import React, { useContext } from "react";
import { Slider, Rail, Handles, Tracks } from "react-compound-slider";
import { Handle, Track } from "./parts";
import ThemeContext from "../../inspector/theme";

const sliderStyle: React.CSSProperties = {
  display: "flex",
  width: "100%",
  position: "relative"
};

const railStyle: React.CSSProperties = {
  position: "absolute",
  width: "100%",
  height: 15,
  borderRadius: 2,
  cursor: "pointer"
};

interface Props {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}

export default function CustomSlider({ min, max, value, onChange }: Props) {
  const {
    knob: {
      slider: { railColor, handleColor, activeTrackColor }
    }
  } = useContext(ThemeContext);
  return (
    <div style={{ height: "15px", width: "100%" }}>
      <Slider
        mode={1}
        step={1}
        domain={[min, max]}
        rootStyle={sliderStyle}
        onUpdate={value => onChange(value[0])}
        values={[value]}
      >
        <Rail>
          {({ getRailProps }) => (
            <div
              style={{ ...railStyle, backgroundColor: railColor }}
              {...getRailProps()}
            />
          )}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map(handle => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  domain={[min, max]}
                  getHandleProps={getHandleProps}
                  backgroundColor={handleColor}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks right={false}>
          {({ tracks, getTrackProps }) => (
            <div className="slider-tracks">
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                  backgroundColor={activeTrackColor}
                />
              ))}
            </div>
          )}
        </Tracks>
      </Slider>
    </div>
  );
}
