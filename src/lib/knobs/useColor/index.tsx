import { useState, useEffect } from "react";
import {
  setKnob,
  removeKnob,
  addKnobRenderer
} from "../../inspector/state-handler";
import Component from "./color";

addKnobRenderer("color", Component);

export default function useColorKnob(name: string, initialValue) {
  const [value, setValue] = useState(initialValue);
  useEffect(
    () => {
      setKnob({
        name,
        type: "color",
        value,
        onChange: (value: string) => {
          setValue(value.hex);
        }
      });
    },
    [value]
  );

  useEffect(() => {
    return () => removeKnob(name);
  }, []);
  return [value, setValue];
}
