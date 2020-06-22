import { useState, useEffect } from "react";
import useInspector from "../../inspector/useInspector";
import Component from "./color";

export default function useColorKnob(name: string, initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const inspector = useInspector();
  inspector.addKnobRenderer("color", Component);
  useEffect(
    () => {
      inspector.setKnob({
        name,
        type: "color",
        value,
        onChange: (value: any) => {
          setValue(value.hex);
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
