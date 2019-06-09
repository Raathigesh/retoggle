import { useState, useEffect } from "react";
import {
  setKnob,
  removeKnob,
  addKnobRenderer
} from "../../inspector/state-handler";
import Component from "./select";

addKnobRenderer("select", Component);

export default function useSelectKnob(
  name: string,
  options: string[],
  initialValue: string
) {
  const [value, setValue] = useState(initialValue);
  useEffect(
    () => {
      setKnob({
        name,
        type: "select",
        options,
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
