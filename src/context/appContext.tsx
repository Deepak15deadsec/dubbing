
import React, {
  createContext,
  useState,
  FC,
  useEffect,
  useContext,
} from "react";

type AppContext = {
  user: Object | undefined;
};

const contextDefaultValues: AppContext = {
  user: {},
};

export const AppContext: any = createContext<AppContext>(contextDefaultValues);

const AppContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>("");

  return (
    <AppContext.Provider
      value={{ user, setUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;