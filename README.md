<div  align="center">
<img src="./docs/Retoggle.png" />
</div>

[![Build Status](https://travis-ci.org/Raathigesh/storyhooks.svg?branch=master)](https://travis-ci.org/Raathigesh/storyhooks)

Retoggle is a dev utility for your demos, presentations and debugging use-cases inspired by [ideas from Dan Abramov](https://twitter.com/dan_abramov/status/1058834904207761409).

- 🎉 A wide range of toggles
- 💡 Frictionless integration
- 🎨 Themeable components
- 🎁 Extensible. Write your custom toggles.

### Show me the code

```javascript
import React, { useState } from "react";
import { Inspector, useLog } from "retoggle";

export default function Demo() {
  const [state, setState] = useState({ value: 5 });

  // logs your state to inspector
  useLog("My state", state);

  return (
    <div>
      <Inspector />
    </div>
  );
}
```

### Avilable knobs

- 📝 `useLog()` - Keeps track of a variable value
- 🅰 `useTextKnob()` - Shows a text box
- 1️⃣ `useNumberKnob()` - Shows a number box
- ✅️ `useBooleanKnob()` - Shows a check box
- 🎚 `useRangeKnob()` - Shows a slider
- 🎛 `useRangesKnob()` - Shows multiple sliders
- 🎏 `useSelectKnob()` - Shows a select box
- ⚒ `useObjectKnob()` - Shows an object editor
- 🎨 `useColorKnob()` - Shows a color picker
- ⏰ `useTimemachine()` - Shows a slider and tracks the state of a given variable and allows to travel back in time

#### 📚 [API Docs with live preview available here.](https://storyhooks.debuggable.io)

## Contribute

### Preparing dev environment

- `yarn install` to install dev dependencies

### Running and building the library

- `yarn start` will start the dev server and expose the sample app
- `yarn build` will output the build artifact to `./lib` folder

### Docs

- `docz:dev` will start the docz developement server
- `docz:build` will build the docs

## License

MIT
