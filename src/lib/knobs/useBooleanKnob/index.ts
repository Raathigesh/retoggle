import { useState, useEffect } from "react";
import useInspector from "../../inspector/useInspector";
import Component from "./boolean";

export default function useBooleanKnob(name: string, initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const inspector = useInspector();
  inspector.addKnobRenderer("boolean", Component);
  useEffect(
    () => {
      inspector.setKnob({
        name,
        type: "boolean",
        value,
        onChange: (value: boolean) => {
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
