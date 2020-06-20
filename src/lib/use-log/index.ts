import { useEffect, useContext } from "react";
import useInspector from "../inspector/useInspector";

export default function useLog(name: string, value: string | boolean | object) {
  const inspector = useInspector();
  useEffect(
    () => {
      inspector.setLog({
        name,
        props: {
          name,
          value
        }
      });
    },
    [value]
  );

  useEffect(() => {
    return () => {
      inspector.removeLog(name);
    };
  }, []);
}
