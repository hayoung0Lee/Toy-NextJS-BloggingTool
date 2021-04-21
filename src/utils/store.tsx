import React, { useState } from "react";
import { debounce } from "./debounce";
// https://reactjs.org/docs/context.html
// https://hmh.engineering/using-react-contextapi-usereducer-as-a-replacement-of-redux-as-a-state-management-architecture-336452b2930e
const Store: any = React.createContext(null);
Store.displayName = "Store";
import { FlashMessageType } from "./types";

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({ children }) => {
  const [isOpen, toggleDropDown] = useState<boolean>(false);
  const [reset, setReset] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");

  const handleToggle = (value: boolean) => {
    toggleDropDown(value);
  };

  const debounceToggleDropDown = debounce(handleToggle, 200);

  const [messages, handleMessages] = useState<FlashMessageType[]>([]);

  const sendMessage = (message: string) => {
    console.log("sendMessage");
    handleMessages((prev: FlashMessageType[]) => [
      ...prev,
      { message: message, duration: 2000 },
    ]);
  };

  return (
    <Store.Provider
      value={{
        isOpen,
        debounceToggleDropDown,
        toggleDropDown,
        reset,
        setReset,
        token,
        setToken,
        messages,
        handleMessages,
        sendMessage,
      }}
    >
      {children}
    </Store.Provider>
  );
};
