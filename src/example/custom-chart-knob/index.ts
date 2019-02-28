import { useState, useEffect } from "react";
import { setKnob, removeKnob, addKnobRenderer } from "../../lib";
import Component from "./component";

addKnobRenderer("chart", Component);

export default function useChartKnob(name: string, value: any) {
  const [data, setData] = useState([] as number[]);

  useEffect(
    () => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      setData([...data, randomNumber]);

      setKnob({
        name,
        type: "chart",
        data
      });
    },
    [value]
  );

  useEffect(() => {
    return () => removeKnob(name);
  }, []);
}
