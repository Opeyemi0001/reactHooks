import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {

  const phone = "+234819049250";
  const name = "opeyemi";

  return (
    <AppContext.Provider value={{phone,name}}>
      {props.children}
    </AppContext.Provider>
  )
}

export default ContextProvider