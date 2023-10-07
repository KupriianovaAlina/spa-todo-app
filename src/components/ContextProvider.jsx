import { createContext } from 'react';

export const Context = createContext({});

const ContextProvider = ({ children }) => {
  const getCurrentProjectId = () => localStorage.getItem('currentProjectId');
  const setCurrentProjectId = (id) => localStorage.setItem('currentProjectId', id);

  return (
    <Context.Provider value={
      {
        setCurrentProjectId, getCurrentProjectId
      }
    }
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
