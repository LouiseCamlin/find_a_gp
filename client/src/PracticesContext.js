import React from "react";

const PracticesContext = React.createContext(true);

export const PracticesProvider = PracticesContext.Provider;
export const PracticesConsumer = PracticesContext.Consumer;

export default PracticesContext;
