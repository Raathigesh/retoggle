import { useState, useContext, useEffect } from "react";
import { setKnob, removeKnob } from "../inspector/global-state";

export default function useSelectKnob(name, options, initialValue) {
  const [value, setValue] = useState(initialValue);
  useEffect(
    () => {
      setKnob({
        name,
        type: "select",
        options,
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
