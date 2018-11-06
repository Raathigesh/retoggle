import { useState, useContext, useEffect } from "react";
import { setKnob, removeKnob } from "../inspector/state-handler";

export default function useTextKnob(name, initialValue = "") {
  const [value, setValue] = useState(initialValue);
  useEffect(
    () => {
      setKnob({
        name,
        type: "text",
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
