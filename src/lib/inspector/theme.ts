import { createContext } from "react";

export interface Theme {
  primaryColor: string;
  backgroundColor: string;
  collapseHandle: {
    backgroundColor: string;
  };
}

export const DefaultTheme: Theme = {
  primaryColor: "#4a27ff",
  backgroundColor: "#f8f7f6",
  collapseHandle: {
    backgroundColor: "#dfdfdf"
  }
};

const ThemeContext = createContext<Theme>(DefaultTheme);
export default ThemeContext;
