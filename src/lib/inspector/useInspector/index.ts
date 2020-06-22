import { useContext } from "react";
import { InspectorContext } from "../provider";

export default function useInspector() {
  return useContext(InspectorContext);
}
