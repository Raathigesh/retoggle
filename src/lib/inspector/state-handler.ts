class StateHandler {
  public logs: any;
  public knobs: any;
  public knobRenderers: any = {};

  public logSubscriber: (log: any) => void;
  public knobSubscriber: (knob: any) => void;

  public addLogSubscriber = (subscriber: any) => {
    this.logSubscriber = subscriber;
  };

  public addKnobSubscriber = (subscriber: any) => {
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

  public setLog = (log: any) => {
    if (this.logSubscriber) {
      this.logSubscriber(log);
    }

    this.logs = {
      ...this.logs,
      [log.name]: log
    };
  };

  public removeLog = (name: string) => {
    if (this.logs) {
      delete this.logs[name];
    }
  };

  public setKnob = (knob: any) => {
    if (this.knobSubscriber) {
      this.knobSubscriber(knob);
    }

    this.knobs = {
      ...this.knobs,
      [knob.name]: knob
    };
  };

  public removeKnob = (name: string) => {
    if (this.knobs) {
      delete this.knobs[name];
    }
  };

  public addKnobRenderer = (name: string, component: any) => {
    this.knobRenderers[name] = component;
  };

  public getKnobRenderer = (name: string) => {
    return this.knobRenderers[name];
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
export const addKnobRenderer = stateHandler.addKnobRenderer;
export const getKnobRenderer = stateHandler.getKnobRenderer;
