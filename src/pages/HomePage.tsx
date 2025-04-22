import { useState } from "react";
import { useToast } from "../components/ToastProvider";
import { ToastType } from "../components/Toast";

function HomePage() {
  const { notify } = useToast();
  const [customMessage, setCustomMessage] = useState("");
  const [selectedType, setSelectedType] = useState<ToastType>("success");

  return (
    <div className="w-full min-h-screen bg-white text-base">
      <main className="w-full max-w-6xl mx-auto px-4 py-8 sm:py-12">
        {/* Hero Section */}
        <section className="flex flex-col items-center my-12 sm:my-24">
          <div className="inline-flex items-center justify-center border border-emerald-200 px-4 py-1 rounded-full text-xs sm:text-sm text-emerald-700 mb-6">
            <span className="font-medium">v0.0.1</span>
            <div className="w-1 h-1 mx-2 bg-emerald-300 rounded-full" />
            <span>Now Available</span>
          </div>

          <h1 className="text-3xl sm:text-4xl text-center font-bold text-gray-900 mb-4">
            Toast Notification System
            <span className="block text-emerald-600 mt-1 text-2xl sm:text-3xl">
              Simple, Powerful, Adaptable
            </span>
          </h1>

          <p className="text-base text-center sm:text-lg text-gray-500 mb-8 max-w-lg">
            A lightweight notification system with intelligent duration control,
            multiple notification types, and seamless integration for modern applications.
          </p>

          {/*Features List */}
            <div className="px-4 py-8 sm:py-12 rounded-2xl mb-12 w-full">
            <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Powerful Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-200 transition-all group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 mb-4 group-hover:bg-emerald-100 transition-colors">
                    <span className="material-icons-outlined">category</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Multiple Toast Types</h3>
                <p className="text-gray-600">Five distinct notification styles for any situation: success, error, warning, info, and loading indicators.</p>
                <ul className="mt-3 space-y-1">
                    <li className="flex items-center text-sm text-gray-500">
                    <span className="material-icons-outlined text-emerald-500 text-base mr-2">check_circle</span>
                    <span>Color-coded for instant recognition</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-500">
                    <span className="material-icons-outlined text-emerald-500 text-base mr-2">check_circle</span>
                    <span>Appropriate icons for each context</span>
                    </li>
                </ul>
                </div>

                {/* Feature 2 */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-200 transition-all group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 mb-4 group-hover:bg-emerald-100 transition-colors">
                    <span className="material-icons-outlined">timer</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Smart Duration Control</h3>
                <p className="text-gray-600">Context-aware timing system that adjusts display duration based on notification importance.</p>
                <ul className="mt-3 space-y-1">
                    <li className="flex items-center text-sm text-gray-500">
                    <span className="material-icons-outlined text-emerald-500 text-base mr-2">check_circle</span>
                    <span>Auto-dismiss with configurable timing</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-500">
                    <span className="material-icons-outlined text-emerald-500 text-base mr-2">check_circle</span>  
                    <span>Persistent mode for critical information</span>
                    </li>
                </ul>
                </div>

                {/* Feature 3 */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-200 transition-all group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 mb-4 group-hover:bg-emerald-100 transition-colors">
                    <span className="material-icons-outlined">integration_instructions</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Seamless Integration</h3>
                <p className="text-gray-600">Drop-in solution for any React application with minimal configuration required.</p>
                <ul className="mt-3 space-y-1">
                    <li className="flex items-center text-sm text-gray-500">
                    <span className="material-icons-outlined text-emerald-500 text-base mr-2">check_circle</span>
                    <span>Simple hook-based API</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-500">
                    <span className="material-icons-outlined text-emerald-500 text-base mr-2">check_circle</span>
                    <span>Fully customizable appearance</span>
                    </li>
                </ul>
                </div>
            </div>
            
            <div className="mt-10 flex justify-center">
                <a href="#demo" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors gap-1">
                See it in action
                <span className="material-icons-outlined text-base">arrow_forward</span>
                </a>
            </div>
            </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="mb-16 border border-gray-200 rounded-xl p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl text-gray-800 font-semibold mb-6 flex items-center">
            <span className="material-icons-outlined text-emerald-500 mr-2">add_circle</span>
            Interactive Demo
          </h2>

          {/* Custom Message Input */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
              Notification Message
            </label>
            <div className="relative">
              <input
                id="message"
                type="text"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Enter your message here..."
                className="w-full bg-white px-4 text-gray-700 py-2 rounded-lg border border-gray-300 focus:ring-1 focus:ring-emerald-500 transition-all outline-none text-sm sm:text-base"
              />
              <div className="absolute inset-y-0 right-3 flex items-center">
                <span className="text-xs sm:text-sm text-gray-400">
                  {customMessage.length}/120
                </span>
              </div>
            </div>
          </div>

          {/* Toast Type Selector */}
          <div className="mb-6">
            <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
              Notification Type
            </label>
            <div className="flex flex-wrap gap-2">
              {['success', 'error', 'warning', 'info', 'loading'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type as ToastType)}
                  className={`px-3 py-1.5 rounded-md text-sm sm:text-base font-medium transition-all ${
                    selectedType === type 
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Demo Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <button
              onClick={() => notify(
                customMessage || "Default message", 
                selectedType,
                selectedType === 'loading' ? 0 : 4000
              )}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 border border-emerald-700 text-sm sm:text-base"
            >
              <span className="material-icons-outlined text-sm sm:text-base">add_circle</span>
              Trigger Custom Toast
            </button>

            <button
              onClick={() => notify(
                "System: Critical alert in progress", 
                "error",
                6000
              )}
              className="px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors flex items-center justify-center gap-2 border border-gray-300 text-sm sm:text-base"
            >
              <span className="material-icons-outlined text-red-500 text-sm sm:text-base">error</span>
              Demo Error Alert
            </button>
          </div>

          {/* Duration Guide */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <h3 className="text-sm sm:text-base font-medium text-gray-700 mb-2">Duration Guide:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs sm:text-sm text-gray-500">
              <li className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Success: 4 seconds
              </li>
              <li className="flex items-center gap-1">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Error: 6 seconds
              </li>
              <li className="flex items-center gap-1">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                Warning: 5 seconds
              </li>
              <li className="flex items-center gap-1">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Info: 4 seconds
              </li>
              <li className="flex items-center gap-1">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Loading: Persistent
              </li>
            </ul>
          </div>
        </section>

        {/* Code Section */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
            <span className="material-icons-outlined text-emerald-500 mr-2">code</span>
            Implementation
          </h2>

          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex justify-between items-center px-4 py-2 bg-gray-50 border-b border-gray-200">
              <div className="flex space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium">Toast.tsx</div>
            </div>

            <pre className="text-xs sm:text-sm text-gray-800 bg-white p-3 sm:p-4 overflow-x-auto font-mono">
              <code>{`// Import the hook
import { useToast } from './ToastProvider';

function YourComponent() {
  const { notify } = useToast();

  const handleSuccess = () => {
    notify('Operation completed successfully', 'success');
  };

  const handleError = () => {
    notify('Unable to connect to server', 'error', 6000);
  };

  const handleLoading = () => {
    const id = notify('Processing your request...', 'loading', 0);

    setTimeout(() => {
      notify.dismiss(id);
      notify('Request completed', 'success');
    }, 3000);
  };

  return (
    <button onClick={handleSuccess}>
      Trigger Notification
    </button>
  );
}`}</code>
            </pre>
          </div>

          <div className="mt-6 text-sm sm:text-base text-gray-500">
            <p className="flex items-start gap-2">
              <span className="material-icons-outlined text-emerald-500 mt-0.5 text-base">check_circle</span>
              <span>
                The toast system automatically stacks notifications and handles queuing for smooth user experience.
              </span>
            </p>
            <p className="flex items-start gap-2 mt-2">
              <span className="material-icons-outlined text-emerald-500 mt-0.5 text-base">check_circle</span>
              <span>
                For TypeScript projects, the available toast types are: 'success', 'error', 'warning', 'info', and 'loading'.
              </span>
            </p>
          </div>
        </section>

        <footer className="text-center text-xs sm:text-sm text-gray-400 border-t border-gray-100 pt-4">
          Notoastui • Version 0.0.1
        </footer>
      </main>
    </div>
  );
}

export default HomePage;