import React from "react";
import { useToast } from "../components/ToastProvider";

function HomePage() {
  const { notify } = useToast();

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <main className="w-full max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-2 rounded-full text-sm text-white mb-4 shadow-lg shadow-emerald-100">
              <span>v0.0.1</span>
              <div className="w-1 h-1 mx-2 bg-white/50 rounded-full" />
              <span>Now Available</span>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Modern Notifications<br />
            <span className="bg-gradient-to-r from-emerald-600 to-cyan-500 bg-clip-text text-transparent">
              Designed for Excellence
            </span>
          </h1>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Elevate your user experience with sophisticated, performance-optimized notifications 
            that blend seamlessly with any interface.
          </p>

          {/* Demo Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-16">
            <button
              onClick={() => notify("Workflow completed successfully", "success")}
              className="px-4 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center gap-3 shadow-lg shadow-emerald-100"
            >
              <div className="p-2 bg-white/10 rounded-lg">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              Success Notification
            </button>
            
            <button
              onClick={() => notify("Critical system error detected", "error")}
              className="px-4 py-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center gap-3 shadow-lg shadow-rose-100"
            >
              <div className="p-2 bg-white/10 rounded-lg">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              Error Notification
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          <div className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-emerald-100 transition-all duration-300 hover:shadow-xl group">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
            <p className="text-gray-500 leading-relaxed">
              Optimized animations at 60fps with smooth transitions and minimal resource usage
            </p>
          </div>
          
          <div className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-rose-100 transition-all duration-300 hover:shadow-xl group">
            <div className="w-12 h-12 bg-rose-50 rounded-xl mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Secure & Private</h3>
            <p className="text-gray-500 leading-relaxed">
              Zero tracking, complete data ownership, and encrypted communications
            </p>
          </div>
          
          <div className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-cyan-100 transition-all duration-300 hover:shadow-xl group">
            <div className="w-12 h-12 bg-cyan-50 rounded-xl mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Fully Customizable</h3>
            <p className="text-gray-500 leading-relaxed">
              Modular design with theming support and extensive documentation
            </p>
          </div>
        </div>

        {/* Code Example */}
        <div className="relative group mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
          <div className="relative bg-gray-900 rounded-2xl p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <button className="text-gray-500 hover:text-gray-300 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
            <pre className="text-sm text-gray-100 overflow-x-auto font-mono">
              <code>{`import { useToast } from '@notiuijs/core'

const Example = () => {
  const { notify } = useToast()

  return (
    <Button 
      onClick={() => notify('Update successful!', 'success')}
    >
      Show Notification
    </Button>
  )
}`}</code>
            </pre>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center">
          <p className="text-gray-400 text-sm">
            Crafted with precision • Part of the Notiuid Design System
          </p>
        </footer>
      </main>
    </div>
  );
}

export default HomePage;