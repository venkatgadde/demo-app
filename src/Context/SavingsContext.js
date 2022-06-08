import { createContext, useState, useEffect, useContext } from "react";

const SavingsContext = createContext();

export const SavingsContextProvider = ({ children }) => {

  const [notificationStatus, setNotificationStatus] = useState(false);
  const [notificationContent, setNotificationContent] = useState([]);

  const contextPayload = {
    notificationStatus,
    notificationContent,
    setNotificationStatus,
    setNotificationContent
  }

  return (
    <SavingsContext.Provider value={contextPayload}>
      {children}
    </SavingsContext.Provider>
  )
}

export const useSavingsContext = () => useContext(SavingsContext);