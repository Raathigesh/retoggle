import React, { useState } from "react";
import { Feather } from "react-feather";
const { SketchPicker } = require("react-color");
const { Manager, Reference, Popper } = require("react-popper");
import KnobFrame from "../../inspector/knobs/frame";

interface Props {
  name: string;
  value: any;
  onChange: (color: any) => void;
}

export default function Color({ name, value, onChange }: Props) {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  return (
    <KnobFrame label={name} icon={<Feather size={11} />}>
      <Manager>
        <Reference>
          {({ ref }: any) => (
            <div ref={ref}>
              <div
                style={{
                  padding: "5px",
                  background: "#fff",
                  borderRadius: "1px",
                  boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
                  display: "inline-block",
                  cursor: "pointer"
                }}
                onClick={() => {
                  setDisplayColorPicker(!displayColorPicker);
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "14px",
                    borderRadius: "2px",
                    background: value
                  }}
                />
              </div>
            </div>
          )}
        </Reference>
        {displayColorPicker && (
          <div
            style={{
              position: "fixed",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px"
            }}
            onClick={() => {
              setDisplayColorPicker(false);
            }}
          />
        )}
        {displayColorPicker && (
          <Popper placement="right">
            {({ ref, style, placement }: any) => (
              <div
                ref={ref}
                style={{ ...style, zIndex: 999 }}
                data-placement={placement}
              >
                <SketchPicker color={value} onChange={onChange} />
              </div>
            )}
          </Popper>
        )}
      </Manager>
    </KnobFrame>
  );
}
