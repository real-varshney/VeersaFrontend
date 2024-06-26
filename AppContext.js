import React, { createContext, useContext, useState} from "react";
export const AppContext = createContext();

export const useApp = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
    const [isDoc, setIsDoc] = useState(false);
  return (
    <AppContext.Provider
      value={{
        isDoc, 
        setIsDoc
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
