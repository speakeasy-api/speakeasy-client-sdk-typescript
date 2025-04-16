
import React from "react";

import { SpeakeasyCore } from "../core.js";

const SpeakeasyContext = React.createContext<SpeakeasyCore | null>(null);

export function SpeakeasyProvider(props: { client: SpeakeasyCore, children: React.ReactNode }): React.ReactNode { 
  return (
    <SpeakeasyContext.Provider value={props.client}>
      {props.children}
    </SpeakeasyContext.Provider>
  );
}

export function useSpeakeasyContext(): SpeakeasyCore { 
  const value = React.useContext(SpeakeasyContext);
  if (value === null) {
    throw new Error("SDK not initialized. Create an instance of SpeakeasyCore and pass it to <SpeakeasyProvider />.");
  }
  return value;
}
