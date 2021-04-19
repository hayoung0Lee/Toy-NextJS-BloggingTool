import React, { useState } from "react";

// https://reactjs.org/docs/context.html
// https://hmh.engineering/using-react-contextapi-usereducer-as-a-replacement-of-redux-as-a-state-management-architecture-336452b2930e
const Store: any = React.createContext(null);
Store.displayName = "Store";

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({ children }) => {
  const [isOpen, toggleDropDown] = useState<boolean>(false);
  return (
    <Store.Provider value={{ isOpen, toggleDropDown }}>
      {children}
    </Store.Provider>
  );
};
