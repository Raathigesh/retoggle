import { createContext } from "react";

export interface Theme {
  primaryColor: string;
  backgroundColor: string;
  collapseHandle: {
    backgroundColor: string;
  };
  knob: {
    label: {
      color: string;
      dividerColor: string;
    };
  };
  log: {
    label: {
      color: string;
      dividerColor: string;
    };
  };
}

export const DefaultTheme: Theme = {
  primaryColor: "#4a27ff",
  backgroundColor: "#f8f7f6",
  collapseHandle: {
    backgroundColor: "#dfdfdf"
  },
  knob: {
    label: {
      color: "#737576",
      dividerColor: "#eaeaea"
    }
  },
  log: {
    label: {
      color: "#737576",
      dividerColor: "#eaeaea"
    }
  }
};

const ThemeContext = createContext<Theme>(DefaultTheme);
export default ThemeContext;
