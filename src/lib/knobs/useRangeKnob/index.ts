import { useState, useEffect } from "react";
import {
  setKnob,
  removeKnob,
  addKnobRenderer
} from "../../inspector/state-handler";
import Component from "./range";

addKnobRenderer("range", Component);

export default function useRangeKnob(
  name: string,
  { initialValue = 0, min = 0, max = 100 }
) {
  const [value, setValue] = useState(initialValue);
  useEffect(
    () => {
      setKnob({
        name,
        type: "range",
        value,
        min,
        max,
        onChange: setValue
      });
    },
    [value]
  );

  useEffect(() => {
    return () => removeKnob(name);
  }, []);

  return [value, setValue];
}
