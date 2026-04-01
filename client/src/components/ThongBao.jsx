import React, { useState, useEffect, useCallback, useContext, createContext } from "react";
import "./ThongBao.css";

// Create Notification Context
const NotificationContext = createContext();

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within NotificationProvider");
  }
  return context;
};

// Notification Provider Component
export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback(
    (message, type = "info", duration = 3000) => {
      const id = Date.now();
      const notification = { id, message, type };

      setNotifications((prev) => [...prev, notification]);

      if (duration > 0) {
        setTimeout(() => {
          removeNotification(id);
        }, duration);
      }

      return id;
    },
    []
  );

  const removeNotification = useCallback((id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  }, []);

  const success = useCallback(
    (message, duration = 3000) =>
      addNotification(message, "success", duration),
    [addNotification]
  );

  const error = useCallback(
    (message, duration = 3000) =>
      addNotification(message, "error", duration),
    [addNotification]
  );

  const warning = useCallback(
    (message, duration = 3000) =>
      addNotification(message, "warning", duration),
    [addNotification]
  );

  const info = useCallback(
    (message, duration = 3000) =>
      addNotification(message, "info", duration),
    [addNotification]
  );

  const value = {
    notifications,
    addNotification,
    removeNotification,
    success,
    error,
    warning,
    info,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <NotificationContainer notifications={notifications} onRemove={removeNotification} />
    </NotificationContext.Provider>
  );
}

// Individual Notification Component
function NotificationItem({ notification, onRemove }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(notification.id);
    }, 5000);

    return () => clearTimeout(timer);
  }, [notification.id, onRemove]);

  return (
    <div className={`notification notification-${notification.type}`}>
      <div className="notification-content">
        <span className="notification-icon">
          {notification.type === "success" && "✓"}
          {notification.type === "error" && "✕"}
          {notification.type === "warning" && "⚠"}
          {notification.type === "info" && "ℹ"}
        </span>
        <span className="notification-message">{notification.message}</span>
      </div>
      <button
        className="notification-close"
        onClick={() => onRemove(notification.id)}
      >
        ✕
      </button>
    </div>
  );
}

// Notification Container Component
function NotificationContainer({ notifications, onRemove }) {
  return (
    <div className="notification-container">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

// Simple Notification Component for direct use
export default function ThongBao({
  message,
  type = "info",
  duration = 3000,
  onClose,
  isVisible = true,
}) {
  const [visible, setVisible] = useState(isVisible);

  useEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);

  useEffect(() => {
    if (!visible) return;

    if (duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible, duration, onClose]);

  if (!visible) return null;

  return (
    <div className={`notification notification-${type}`}>
      <div className="notification-content">
        <span className="notification-icon">
          {type === "success" && "✓"}
          {type === "error" && "✕"}
          {type === "warning" && "⚠"}
          {type === "info" && "ℹ"}
        </span>
        <span className="notification-message">{message}</span>
      </div>
      <button
        className="notification-close"
        onClick={() => {
          setVisible(false);
          onClose?.();
        }}
      >
        ✕
      </button>
    </div>
  );
}
