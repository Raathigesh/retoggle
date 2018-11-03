import React, { Component, useState } from "react";
import { Inspector, useLog } from "../lib";

export default function App() {
  const [value, setValue] = useState({ name: "" });
  useLog("A", value);
  return (
    <React.Fragment>
      <div className="App">{value.name}</div>
      <input
        type="text"
        onChange={e =>
          setValue({
            name: e.target.value
          })
        }
      />
    </React.Fragment>
  );
}
