import React, { useState, useContext } from 'react';

const defaultValue = {};

const ContainerContext = React.createContext(defaultValue);

export const ContainerProvider = ({ children }) => {
  const [context, setContext] = useState();

  const setUser = (user) => setContext({ ...context, user });

  return (
    <ContainerContext.Provider value={{ ...context, setUser }}>
      {children}
    </ContainerContext.Provider>
  );
};

export const useContainer = () => {
  const context = useContext(ContainerContext);

  return context;
};
