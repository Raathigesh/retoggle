import { useState, useEffect } from "react";
import { useInspector } from "../../lib";
import Component from "./component";

export default function useChartKnob(name: string, value: any) {
  const [data, setData] = useState([] as number[]);
  const inspector = useInspector();
  inspector.addKnobRenderer("chart", Component);

  useEffect(
    () => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      setData([...data, randomNumber]);

      inspector.setKnob({
        name,
        type: "chart",
        data
      });
    },
    [value]
  );

  useEffect(() => {
    return () => inspector.removeKnob(name);
  }, []);
}
