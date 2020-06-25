<div  align="center">
<img src="./docs/Retoggle.png" />
<br />
<br />
<img src="https://img.shields.io/travis/Raathigesh/retoggle.svg?style=flat-square" />
<img src="https://img.shields.io/github/license/Raathigesh/retoggle.svg?style=flat-square" />
<img src="https://img.shields.io/npm/v/retoggle.svg?style=flat-square" />
</div>

<br />

Retoggle is a collection of React hooks which provides UI toggles to manipulate your component state from outside. Like [Storybook Knobs](https://www.npmjs.com/package/@storybook/addon-knobs). This library is inspired by [ideas from Dan Abramov](https://twitter.com/dan_abramov/status/1058834904207761409).

- 🎉 A wide range of toggles
- 💡 Frictionless integration
- 🎨 Themeable components
- 🎁 Extensible. Write your custom toggles.

### Available knobs

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

#### 📚 [API Docs with live preview available here](https://retoggle.netlify.com)

#### 🔮 [Codesandbox Demo](https://codesandbox.io/s/kw21kn3063)

### An example

The value of `state` will be displayed in the inspector component.

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

### Contribute

Preparing dev environment

- `yarn install` to install dev dependencies

Running and building the library

- `yarn start` will start the dev server and expose the sample app
- `yarn build` will output the build artifact to `./lib` folder

Docs

- `docz:dev` will start the docz development server
- `docz:build` will build the docs

### License

MIT
