import { createContext, useState } from "react";
import getBrowserLocales from "../utils/getBrowserLocales";

export const Context = createContext(); // import {Context}, then useContext(Context)

const GlobalContext = ({ children }) => {
  const [language, setLanguage] = useState("eng");
  const languages = getBrowserLocales();

  const values = { language, setLanguage, languages };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default GlobalContext; // wrap the whole app with <GlobalContext> <GlobalContext />
