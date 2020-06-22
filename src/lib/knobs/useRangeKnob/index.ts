import { useState, useEffect } from "react";
import useInspector from "../../inspector/useInspector";
import Component from "./range";

export default function useRangeKnob(
  name: string,
  { initialValue = 0, min = 0, max = 100 }
) {
  const [value, setValue] = useState(initialValue);
  const inspector = useInspector();
  inspector.addKnobRenderer("range", Component);
  useEffect(
    () => {
      inspector.setKnob({
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
    return () => inspector.removeKnob(name);
  }, []);

  return [value, setValue] as const;
}
