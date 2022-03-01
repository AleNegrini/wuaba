import React, { useState } from "react";

interface IAppContext {
  isSignupModalOpen: boolean;
  toggleSignupModalOpen?: () => void;
}

const defaultState = {
  isSignupModalOpen: false,
};

export const AppContext = React.createContext<IAppContext>(defaultState);

const ContextProvider: React.FC = ({ children }) => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(defaultState.isSignupModalOpen);

  const toggleSignupModalOpen = () => setIsSignupModalOpen(!isSignupModalOpen);

  return (
    <AppContext.Provider
      value={{
        isSignupModalOpen,
        toggleSignupModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
