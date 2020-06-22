import { useEffect, useContext } from "react";
import useInspector from "../../inspector/useInspector";
import useRangeKnob from "../useRangeKnob";
import { Props } from "../useRangeKnob/range";

export default function useRangesKnob(
  name: string,
  ranges: { [name: string]: Props }
) {
  const inspector = useInspector();
  const results = {
    values: {}
  };

  Object.entries(ranges).forEach(([propertyName, options]) => {
    const [value, setValue] = useRangeKnob(`${name}-${propertyName}`, options);
    results.values[propertyName] = value;
  });

  useEffect(() => {
    return () => {
      Object.entries(ranges).forEach(([propertyName]) => {
        inspector.removeKnob(`${name}-${propertyName}`);
      });
    };
  }, []);

  return [results];
}
