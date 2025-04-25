import React, { createContext, useContext, useState, useCallback } from "react";
import { Toast, ToastType } from "./Toast";

type ToastItem = {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
};

type ToastContextType = {
  notify: (message: string, type: ToastType, duration?: number) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within a ToastProvider");
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const notify = useCallback((message: string, type: ToastType, duration = 4000) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type, duration }]);
    
    if (duration > 0) {
      setTimeout(() => removeToast(id), duration);
    }
  }, [removeToast]);

  return (
    <ToastContext.Provider value={{ notify }}>
      {children}
      <div id="toastLocation" className="right-4 items-end fixed top-4 right-4 flex flex-col gap-4 z-[9999]">
        {toasts.map((toast) => (
          <Toast 
            key={toast.id} 
            {...toast} 
            onClose={removeToast} 
            timeout={toast.duration}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

