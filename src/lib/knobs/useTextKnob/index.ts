import { useState, useEffect } from "react";
import {
  setKnob,
  removeKnob,
  addKnobRenderer
} from "../../inspector/state-handler";
import Component from "./text";

addKnobRenderer("text", Component);

export default function useTextKnob(name: string, initialValue = "") {
  const [value, setValue] = useState(initialValue);
  useEffect(
    () => {
      setKnob({
        name,
        type: "text",
        value,
        onChange: (value: string) => {
          setValue(value);
        }
      });
    },
    [value]
  );

  useEffect(() => {
    return () => removeKnob(name);
  }, []);

  return [value, setValue] as const;
}
