// https://twitter.com/dan_abramov/status/1058870951373344769

import { useEffect, useReducer, useContext } from "react";
import useInspector from "../../inspector/useInspector";
import Component from "./timeMachine";

export default function useTimeMachine(name: string, currentState: any) {
  const [machineState, dispatch] = useReducer(
    (machineState: any, action: any) => {
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
  const inspector = useInspector();
  inspector.addKnobRenderer("timemachine", Component);

  const { history, version } = machineState;
  if (currentState !== history[history.length - 1]) {
    dispatch({ type: "next", state: currentState });
  }

  useEffect(
    () => {
      inspector.setKnob({
        name,
        type: "timemachine",
        min: 0,
        max: history.length - 1,
        value: version,
        onChange(newVersion: any) {
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
    return () => inspector.removeKnob(name);
  }, []);

  return history[version];
}
