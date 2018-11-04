import { useState, useEffect } from "react";
import { setKnob, removeKnob } from "../inspector/global-state";

export default function useBooleanKnob(name, initialValue = false) {
  const [value, setValue] = useState(initialValue);
  useEffect(
    () => {
      setKnob({
        name,
        type: "boolean",
        value,
        onChange: value => {
          setValue(value);
        }
      });
    },
    [value]
  );

  useEffect(() => {
    return () => removeKnob(name);
  }, []);
  return [value, setValue];
}
