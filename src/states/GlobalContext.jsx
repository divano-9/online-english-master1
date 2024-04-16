import { createContext, useState } from "react";
import getBrowserLocales from "../utils/getBrowserLocales";

export const Context = createContext(); // import {Context}, then useContext(Context)

const GlobalContext = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(true);

  const languages = getBrowserLocales();

  const values = { isEnglish, setIsEnglish, languages }; // store the values that need to bee passed down to other components

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default GlobalContext; // wrap the whole app with <GlobalContext> <GlobalContext />
