import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // UseState is a hook to add the info from the API to the state
  const [count, setCount] = useState(0);
  // To inspect the value of count:  // console.log(count);

  return (
    <AppContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
