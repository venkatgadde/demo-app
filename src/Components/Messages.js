import React from 'react'
import { useNotificationContext } from '../Context/NotificationContext'

export default function Messages() {

  const { notificationContent, setNotificationContent } = useNotificationContext();

  const onClickHandler = () => {
    setNotificationContent(null);
  }

  if (!notificationContent) {
    return null;
  }

  const state = notificationContent.type === 'error' ? 'alert-danger' : 'alert-warning';

  return (
    <div className={`alert ${state} alert-dismissible fade show`} role="alert">
      {notificationContent.message}
      <button type="button" className="btn-close" aria-label="Close" onClick={onClickHandler}></button>
    </div>
  )
}
