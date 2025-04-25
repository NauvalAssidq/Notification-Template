import React from "react";

export type ToastType = "success" | "error" | "warning" | "info" | "loading";

export type ToastProps = {
  id: string;
  message: string;
  type: ToastType;
  onClose: (id: string) => void;
  timeout?: number;
}

const variantStyles = {
  success: "border-1 border-green-700 bg-green-600/85 backdrop-blur-sm",
  error: "border-1 border-red-700 bg-red-600/95 backdrop-blur-sm",
  warning: "border-1 border-yellow-700 bg-yellow-600/95 backdrop-blur-sm",
  info: "border-1 border-blue-700 bg-blue-600/95 backdrop-blur-sm",
  loading: "border-1 border-gray-700 bg-gray-600/95 backdrop-blur-sm",
};

const toastIcons = {
  success: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  ),
  error: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
    </svg>
  ),
  warning: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"/>
    </svg>
  ),
  info: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
    </svg>
  ),
  loading: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeOpacity="0.2"/>
      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="42 42"/>
    </svg>
  ),
};

export const Toast: React.FC<ToastProps> = ({ id, message, type, onClose }) => {
  return (
    <div
      role="alert"
      className={`${variantStyles[type]} text-white px-4 py-3 rounded-lg shadow-md
        flex items-center gap-3 animate-toast-pop transition-all duration-300
        hover:shadow-sm transform hover:-translate-y-1 motion-reduce:transition-none
        group relative overflow-hidden w-fit max-w-[90vw]`}
      >
      <div className="flex-shrink-0">
        {toastIcons[type]}
      </div>
      
      <span className="flex-1 text-sm font-medium leading-tight">{message}</span>

        <button
          onClick={() => onClose(id)}
          className="flex-shrink-0 bg-transparent rounded-full p-1 text-white hover:bg-white/10 
            transition-colors"
          aria-label="Close toast"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
    </div>
  );
};

