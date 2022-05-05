import { createContext, useContext, useState } from "react";


const Context = createContext(null);


export function ModalProvider({ children }) {
  // Local state
  const [modal, setModal] = useState(null);

  // Properties
  const value = { modal, setModal };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}


export function useModal() {
  const context = useContext(Context);
  const errorText =
    "To use useModal(), you need to wrap the parent component with <ModalProvider/>";

  // Safeguards
  if (!context) throw new Error(errorText);

  return context;
}