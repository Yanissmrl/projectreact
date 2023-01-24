import { createContext } from 'react';

export const ApiContext = createContext();

export default function ApiProvider({ children }) {
  return (
    <ApiContext.Provider value={{
    }}>
      {children}
    </ApiContext.Provider>

  );
}