import React, { useState, createContext } from 'react';
import StateHandler, { defaultStateHandler } from './state-handler';

export const InspectorContext = createContext<StateHandler>(defaultStateHandler);

type Props = {
    children?: any;
}

export default function InspectorProvider({ children }: Props) {
    const [handler] = useState(new StateHandler());
    return (
        <InspectorContext.Provider value={handler}>
            {typeof children === 'function' ? children() : children}
        </InspectorContext.Provider>
    )
}
