# storyhooks

## useLog(label, value)

Displays the value in the inspector panel

- `label` - A label for the log
- `value` - The value that should be displayed

Usage

```
import React, {useState} from 'react';
import {useLog} from 'storyhooks';
function Demo() {
    const [state, setState] = useState({value: 5});
    useLog('State Value', state);
    return <div />
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
  const [number, setNumber] = useNumberKnob("Name", 10);
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
  const [range, setRance] = useRangeKnob("Name", {
    initialValue: 4,
    mix: 40,
    max: 300
  });
  return <div>{range}</div>;
}
```

## useRangesKnob(label, slider: {initialValue, mix, max})

Provides

- `label` - A label for the range
- `initialValue` - The initial value of the slider. Defaults to `0`.
- `min` - Minimum value of the slider. Defaults to `0`.
- `max` - Maximum value of the slider. Defaults to `0`.

Usage

```javascript
import React, { useState } from "react";
import { useRangeKnob } from "storyhooks";
function Demo() {
  const [range, setRance] = useRangeKnob("Name", {
    initialValue: 4,
    mix: 40,
    max: 300
  });
  return <div>{range}</div>;
}
```
