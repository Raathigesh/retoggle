import { createContext } from "react";
import {ThemeKeys} from "react-json-view";

export interface Theme {
  primaryColor: string;
  backgroundColor: string;
  collapseHandle: {
    backgroundColor: string;
    color: string;
  };
  knob: {
    label: {
      color: string;
      dividerColor: string;
    };
    slider: {
      railColor: string;
      handleColor: string;
      activeTrackColor: string;
    };
  };
  log: {
    objectViewerTheme: ThemeKeys;
    label: {
      color: string;
      dividerColor: string;
    };
  };
}

export const DefaultTheme: Theme = {
  primaryColor: "#223f5a",
  backgroundColor: "#f8f7f6",
  collapseHandle: {
    backgroundColor: "#e2e2e2",
    color: "gray"
  },
  knob: {
    label: {
      color: "#737576",
      dividerColor: "#eaeaea"
    },
    slider: {
      railColor: "rgb(228, 228, 228)",
      handleColor: "#223f5a",
      activeTrackColor: "#ffca20"
    }
  },
  log: {
    objectViewerTheme: "rjv-default",
    label: {
      color: "#737576",
      dividerColor: "#eaeaea"
    }
  }
};

export const DarkTheme: Theme = {
  primaryColor: "#4a27ff",
  backgroundColor: "#223f5a",
  collapseHandle: {
    backgroundColor: "#728ea7",
    color: "white"
  },
  knob: {
    label: {
      color: "white",
      dividerColor: "#eaeaea"
    },
    slider: {
      railColor: "rgb(228, 228, 228)",
      handleColor: "#4a27ff",
      activeTrackColor: "wheat"
    }
  },
  log: {
    objectViewerTheme: "flat",
    label: {
      color: "white",
      dividerColor: "#eaeaea"
    }
  }
};

const ThemeContext = createContext<Theme>(DefaultTheme);
export default ThemeContext;
