import { useState, useEffect } from "react";
import useInspector from "../../inspector/useInspector";
import Component from "./number";

export default function useTextKnob(name: string, initialValue = 0) {
  const [value, setValue] = useState(initialValue);
  const inspector = useInspector();
  inspector.addKnobRenderer("number", Component);
  useEffect(
    () => {
      inspector.setKnob({
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
    return () => inspector.removeKnob(name);
  }, []);

  return [value, setValue] as const;
}
