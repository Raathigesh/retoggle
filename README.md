# storyhooks

[![Build Status][build-badge]][build]

## useLog(label, value)

Displays the value in the inspector panel

- `label` - A label for the log
- `value` - The value that should be displayed

Usage

```javascript
import React, { useState } from "react";
import { useLog } from "storyhooks";
function Demo() {
  const [state, setState] = useState({ value: 5 });
  useLog("State Value", state);
  return <div />;
}
```

## useTextKnob(label, [initialValue])

Displays a text box in the inspector panel and provides you the text and a method to set the text.

- `label` - A label for the text box
- `initialValue` - the Initial value of the text box. Defaults to `""`;

Usage

```javascript
import React, { useState } from "react";
import { useTextKnob } from "storyhooks";
function Demo() {
  const [text, setText] = useTextKnob("Name", "Hello World");
  return <div>{text}</div>;
}
```

## useNumberKnob(label, [initialValue])

Displays a number box in the inspector panel and provides you the number and a method to set the number.

- `label` - A label for the number box
- `initialValue` - the Initial value of the number box. Defaults to `0`.

Usage

```javascript
import React, { useState } from "react";
import { useNumberKnob } from "storyhooks";
function Demo() {
  const [number, setNumber] = useNumberKnob("Number", 10);
  return <div>{number}</div>;
}
```

## useRangeKnob(label, [{initialValue, mix, max}])

Displays a slider in inspector panel and provides you the number and a method to set the number.

- `label` - A label for the range
- `initialValue` - The initial value of the slider. Defaults to `0`.
- `min` - Minimum value of the slider. Defaults to `0`.
- `max` - Maximum value of the slider. Defaults to `0`.

Usage

```javascript
import React, { useState } from "react";
import { useRangeKnob } from "storyhooks";
function Demo() {
  const [range, setRance] = useRangeKnob("Range", {
    initialValue: 4,
    mix: 40,
    max: 300
  });
  return <div>{range}</div>;
}
```

## useRangesKnob(label, {[name]: {initialValue, mix, max}})

Provides multiple range contorls. A wrapper around `useRangeKnob` for ease of use.

- `label` - A label for the range group
- `ranges` - An object with keys as range names and values as follows.
  - `initialValue` - The initial value of the slider. Defaults to `0`.
  - `min` - Minimum value of the slider. Defaults to `0`.
  - `max` - Maximum value of the slider. Defaults to `0`.

Usage

```javascript
import React, { useState } from "react";
import { useRangeKnob } from "storyhooks";
function Demo() {
  const rangeValues = useRangesKnob("Ranges", {
    xAxis: {
      initialValue: 4,
      mix: 40,
      max: 300
    },
    yAxis: {
      initialValue: 4,
      mix: 40,
      max: 300
    }
  });
  return (
    <div>
      {rangeValues.xAxis} - {rangeValues.yAxis}
    </div>
  );
}
```

## useSelectKnob(label, options, initialValue)

Displays a select box with options.

- `label` - A label for the select box
- `options` - A array of strings or numbers which should be displayed as options
- `initialValue` - A value from the options array to use as the initial value

Usage

```javascript
import React, { useState } from "react";
import { useRangeKnob } from "storyhooks";
function Demo() {
  const [selectedOption, setSelection] = useSelectKnob(
    "Select",
    ["Orange", "Apple"],
    "Apple"
  );
  return <div>{selectedOption}</div>;
}
```

## useTimemachine(label, value)

Tracks the state changes of the value and allows going back in time by using the slider.

- `label` - A label for the slider
- `value` - A state value to track

Usage

```javascript
import React, { useState } from "react";
import { useTimemachine } from "storyhooks";
function Demo() {
  const [state, setState] = ({ value: 5 });
  const timeTravelledState = useTimemachine("State timemachine", state);
  return (
    <div>
        {timeTravelledState.value}
    </div>
  );
```

[build-badge]: https://img.shields.io/travis/raathigesh/storyhooks.svg?style=flat-square
[build]: https://travis-ci.org/Raathigesh/storyhooks
