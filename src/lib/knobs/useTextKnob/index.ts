import { useState, useEffect, useContext } from "react";
import useInspector from "../../inspector/useInspector";
import Component from "./text";

export default function useTextKnob(name: string, initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const inspector = useInspector();
  inspector.addKnobRenderer("text", Component);
  useEffect(
    () => {
      inspector.setKnob({
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
    return () => inspector.removeKnob(name);
  }, []);

  return [value, setValue] as const;
}
