import { useState, useEffect } from "react";
import useInspector from "../../inspector/useInspector";
import Component from "./object";

export default function useObjectKnob(name: string, initialValue = {}) {
  const [value, setValue] = useState(initialValue);
  const inspector = useInspector();
  inspector.addKnobRenderer("object", Component);
  useEffect(
    () => {
      inspector.setKnob({
        name,
        type: "object",
        value,
        onChange: (value: number) => {
          setValue(value);
        }
      });
    },
    [value]
  );

  useEffect(() => {
    return () => inspector.removeKnob(name);
  }, []);

  return [value, setValue] as const;
}
