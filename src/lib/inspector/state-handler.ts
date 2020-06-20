export default class StateHandler {
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
export const defaultStateHandler = new StateHandler();

/** @deprecated use inspector context. using these methods will only affect inspectors not used in an inspector context */
export const addLogSubscriber = defaultStateHandler.addLogSubscriber;
/** @deprecated use inspector context. using these methods will only affect inspectors not used in an inspector context */
export const addKnobSubscriber = defaultStateHandler.addKnobSubscriber;
/** @deprecated use inspector context. using these methods will only affect inspectors not used in an inspector context */
export const haveLogs = defaultStateHandler.haveLogs;
/** @deprecated use inspector context. using these methods will only affect inspectors not used in an inspector context */
export const haveKnobs = defaultStateHandler.haveKnobs;
/** @deprecated use inspector context. using these methods will only affect inspectors not used in an inspector context */
export const getLogs = defaultStateHandler.getLogs;
/** @deprecated use inspector context. using these methods will only affect inspectors not used in an inspector context */
export const getKnobs = defaultStateHandler.getKnobs;
/** @deprecated use inspector context. using these methods will only affect inspectors not used in an inspector context */
export const setLog = defaultStateHandler.setLog;
/** @deprecated use inspector context. using these methods will only affect inspectors not used in an inspector context */
export const removeLog = defaultStateHandler.removeLog;
/** @deprecated use inspector context. using these methods will only affect inspectors not used in an inspector context */
export const setKnob = defaultStateHandler.setKnob;
/** @deprecated use inspector context. using these methods will only affect inspectors not used in an inspector context */
export const removeKnob = defaultStateHandler.removeKnob;
/** @deprecated use inspector context. using these methods will only affect inspectors not used in an inspector context */
export const addKnobRenderer = defaultStateHandler.addKnobRenderer;
/** @deprecated use inspector context. using these methods will only affect inspectors not used in an inspector context */
export const getKnobRenderer = defaultStateHandler.getKnobRenderer;
