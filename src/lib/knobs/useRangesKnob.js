import { useState, useEffect } from "react";
import { setKnob } from "../inspector/global-state";
import useRangeKnob from "./useRangeKnob";

export default function useRangesKnob(name, ranges) {
  const results = {
    values: {}
  };

  Object.entries(ranges).forEach(([name, options]) => {
    const [value, setValue] = useRangeKnob(name, options);
    results.values[name] = value;
  });

  return [results];
}
