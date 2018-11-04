import { useState, useEffect } from "react";
import { setKnob, removeKnob } from "../inspector/global-state";
import useRangeKnob from "./useRangeKnob";

export default function useRangesKnob(name, ranges) {
  const results = {
    values: {}
  };

  Object.entries(ranges).forEach(([propertyName, options]) => {
    const [value, setValue] = useRangeKnob(`${name}-${propertyName}`, options);
    results.values[propertyName] = value;
  });

  useEffect(() => {
    return () => {
      Object.entries(ranges).forEach(([propertyName, options]) => {
        removeKnob(`${name}-${propertyName}`);
      });
    };
  }, []);

  return [results];
}
