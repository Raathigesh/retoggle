// https://twitter.com/dan_abramov/status/1058870951373344769

import { useEffect, useReducer } from "react";
import {
  setKnob,
  removeKnob,
  addKnobRenderer
} from "../../inspector/state-handler";
import Component from "./timemachine";

addKnobRenderer("timemachine", Component);

export default function useTimeMachine(name, currentState) {
  const [machineState, dispatch] = useReducer(
    (machineState, action) => {
      switch (action.type) {
        case "next":
          return {
            history: [...machineState.history, action.state],
            version: machineState.version + 1
          };
        case "move":
          return {
            ...machineState,
            version: action.version
          };
        default:
          return machineState;
      }
    },
    {
      history: [],
      version: -1
    }
  );

  const { history, version } = machineState;
  if (currentState !== history[history.length - 1]) {
    dispatch({ type: "next", state: currentState });
  }

  useEffect(
    () => {
      setKnob({
        name,
        type: "timemachine",
        min: 0,
        max: history.length - 1,
        value: version,
        onChange(newVersion) {
          dispatch({
            type: "move",
            version: newVersion
          });
        }
      });
    },
    [version, history]
  );

  useEffect(() => {
    return () => removeKnob(name);
  }, []);

  return history[version];
}
