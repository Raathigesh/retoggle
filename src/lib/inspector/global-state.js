export function setLog(log) {
  if (window.setLog) {
    window.setLog(log);
  }

  if (!window.logs) {
    window.logs = {};
  }

  window.logs = {
    ...window.logs,
    [log.name]: log
  };
}

export function setKnob(knob) {
  if (window.setKnob) {
    window.setKnob(knob);
  }

  if (!window.knobs) {
    window.knobs = {};
  }

  window.knobs = {
    ...window.knobs,
    [knob.name]: knob
  };
}
