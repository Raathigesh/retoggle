// this is just.. i don't know the word for it...
class StateHandler {
  public logs: any;
  public knobs: any;

  public logSubscriber: (log: any) => void;
  public knobSubscriber: (knob: any) => void;

  public addLogSubscriber = subscriber => {
    this.logSubscriber = subscriber;
  };

  public addKnobSubscriber = subscriber => {
    this.knobSubscriber = subscriber;
  };

  public haveLogs = () => {
    return !!this.logs;
  };

  public haveKnobs = () => {
    return !!this.knobs;
  };

  public getLogs = () => {
    return this.logs;
  };

  public getKnobs = () => {
    return this.knobs;
  };

  public setLog = log => {
    if (this.logSubscriber) {
      this.logSubscriber(log);
    }

    this.logs = {
      ...this.logs,
      [log.name]: log
    };
  };

  public removeLog = name => {
    if (this.logs) {
      delete this.logs[name];
    }
  };

  public setKnob = knob => {
    if (this.knobSubscriber) {
      this.knobSubscriber(knob);
    }

    this.knobs = {
      ...this.knobs,
      [knob.name]: knob
    };
  };

  public removeKnob = name => {
    if (this.knobs) {
      delete this.knobs[name];
    }
  };
}

// singleton
const stateHandler = new StateHandler();

export const addLogSubscriber = stateHandler.addLogSubscriber;
export const addKnobSubscriber = stateHandler.addKnobSubscriber;
export const haveLogs = stateHandler.haveLogs;
export const haveKnobs = stateHandler.haveKnobs;
export const getLogs = stateHandler.getLogs;
export const getKnobs = stateHandler.getKnobs;
export const setLog = stateHandler.setLog;
export const removeLog = stateHandler.removeLog;
export const setKnob = stateHandler.setKnob;
export const removeKnob = stateHandler.removeKnob;
