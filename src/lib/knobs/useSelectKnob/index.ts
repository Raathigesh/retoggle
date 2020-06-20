import { useState, useEffect, useContext } from "react";
import useInspector from "../../inspector/useInspector";
import Component from "./select";

export default function useSelectKnob(
  name: string,
  options: string[],
  initialValue: string
) {
  const [value, setValue] = useState(initialValue);
  const inspector = useInspector();
  inspector.addKnobRenderer("select", Component);
  useEffect(
    () => {
      inspector.setKnob({
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
    return () => inspector.removeKnob(name);
  }, []);

  return [value, setValue] as const;
}
