import { useState, useContext, useEffect, useReducer } from "react";
import { setKnob } from "../inspector/global-state";

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
      console.log(history.length);
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

  return history[version];
}
