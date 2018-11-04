import { useState, useContext, useEffect } from "react";
import { setKnob } from "../inspector/global-state";

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
  return [value, setValue];
}
