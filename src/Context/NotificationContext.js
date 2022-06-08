import { createContext, useState, useContext } from "react";

const NotificationContext = createContext();

export const NotificationContextProvider = ({ children }) => {

  const [notificationStatus, setNotificationStatus] = useState(false);
  const [notificationContent, setNotificationContent] = useState(null);

  const contextPayload = {
    notificationStatus,
    notificationContent,
    setNotificationStatus,
    setNotificationContent
  }

  return (
    <NotificationContext.Provider value={contextPayload}>
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotificationContext = () => useContext(NotificationContext);