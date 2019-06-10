import { useState, useEffect } from "react";
import {
  setKnob,
  removeKnob,
  addKnobRenderer
} from "../../inspector/state-handler";
import Component from "./number";

addKnobRenderer("number", Component);

export default function useTextKnob(name: string, initialValue = 0) {
  const [value, setValue] = useState(initialValue);
  useEffect(
    () => {
      setKnob({
        name,
        type: "number",
        value,
        onChange: (value: number) => {
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
