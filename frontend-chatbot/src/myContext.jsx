import  { createContext, useContext, useState } from 'react';

// Create a context with an initial state
const AppStateContext = createContext();

// Create a provider component to wrap your app and manage the state
// eslint-disable-next-line react/prop-types
export const AppStateProvider = ({ children }) => {
  const [chatData, setChatData] = useState({
    // Your initial state goes here
    oldChats:'',
    messageData:[],
    context:''
    // Add more states as needed
  });

  return (
    <AppStateContext.Provider value={{ chatData, setChatData }}>
      {children}
    </AppStateContext.Provider>
  );
};

// Create a custom hook to easily access the context
// eslint-disable-next-line react-refresh/only-export-components
export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};
