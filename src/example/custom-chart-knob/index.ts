import { useState, useContext, useEffect } from "react";
import { setKnob, removeKnob, addKnobRenderer } from "../../lib";
import Component from "./component";

addKnobRenderer("chart", Component);

export default function useChartKnob(name, value) {
  const [data, setData] = useState([]);

  useEffect(
    () => {
      setData([
        ...data,
        {
          x: value.text,
          y: value.text.length
        }
      ]);

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
