# Toast-Notif, Notoastui

A lightweight, customizable toast notification system for React applications with TypeScript support.

## Features

- **Multiple Notification Types** - Success, error, warning, info, and loading states with appropriate styling and icons
- **Smart Duration Control** - Context-aware timing with customizable durations
- **Simple Hook API** - Easy integration with any React component
- **TypeScript Support** - Full type definitions for better development experience
- **Customizable Design** - Modern UI with smooth animations and responsive layout
- **Auto-dismissal** - Notifications disappear automatically based on type and importance

## Installation

```bash
npm install toast-notification-library
# or
yarn add toast-notification-library
# or
pnpm add toast-notification-library
```

## Quick Start

### 1. Wrap your application with the ToastProvider

```tsx
// main.tsx or App.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastProvider } from "toast-notification-library";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>
);
```

### 2. Use the hook in your components

```tsx
import { useToast } from "toast-notification-library";

function MyComponent() {
  const { notify } = useToast();
  
  const handleClick = () => {
    // Basic usage
    notify("Operation completed successfully", "success");
    
    // With custom duration (in milliseconds)
    notify("Unable to connect to server", "error", 6000);
    
    // Persistent notification (0 duration)
    notify("Processing your request...", "loading", 0);
  };
  
  return (
    <button onClick={handleClick}>
      Show Notification
    </button>
  );
}
```

## API Reference

### ToastProvider

Wrap your application with this provider to enable toast notifications.

```tsx
<ToastProvider>
  {children}
</ToastProvider>
```

### useToast Hook

```tsx
const { notify } = useToast();
```

#### `notify` function

```tsx
notify(message: string, type: ToastType, duration?: number): string
```

- `message`: The text content of the notification
- `type`: One of `"success"`, `"error"`, `"warning"`, `"info"`, or `"loading"`
- `duration`: Time in milliseconds before auto-dismissal (default varies by type)
  - Set to `0` for persistent notifications (must be dismissed manually)
- Returns a unique ID that can be used to dismiss the notification programmatically

## Duration Guide

Each notification type has a default duration:

- **Success**: 4000ms (4 seconds)
- **Error**: 6000ms (6 seconds)
- **Warning**: 5000ms (5 seconds)
- **Info**: 4000ms (4 seconds)
- **Loading**: Persistent (doesn't auto-dismiss)

## Advanced Usage

### Programmatic Dismissal

For async operations, you can create persistent loading toasts and dismiss them when the operation completes:

```tsx
async function handleSubmit() {
  // Create persistent loading notification
  const loadingId = notify("Submitting form...", "loading", 0);
  
  try {
    await submitForm();
    // Remove loading notification
    removeToast(loadingId);
    // Show success notification
    notify("Form submitted successfully", "success");
  } catch (error) {
    // Remove loading notification
    removeToast(loadingId);
    // Show error notification
    notify("Error submitting form", "error");
  }
}
```

## Customization

The toast components use Tailwind CSS for styling. You can customize the appearance by modifying the Toast component or overriding the CSS classes.

## Browser Support

- Chrome, Firefox, Safari, and Edge (latest 2 versions)
- Internet Explorer is not supported

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Created with [Vite](https://vitejs.dev/)
