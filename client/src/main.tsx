import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

console.log('[MAIN] Script loaded, readyState:', document.readyState);

function mountApp() {
  console.log('[MAIN] mountApp called');
  const rootElement = document.getElementById("root");
  console.log('[MAIN] rootElement:', rootElement);

  if (!rootElement) {
    console.error('[MAIN] Root element not found!');
    throw new Error('Root element not found');
  }

  console.log('[MAIN] Creating React root...');
  try {
    createRoot(rootElement).render(<App />);
    console.log('[MAIN] React mounted successfully!');
  } catch (error) {
    console.error('[MAIN] Error mounting React:', error);
    throw error;
  }
}

// Wait for DOM to be ready before mounting React
console.log('[MAIN] Setting up mount logic...');
if (document.readyState === 'loading') {
  console.log('[MAIN] DOM loading, adding DOMContentLoaded listener');
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  console.log('[MAIN] DOM already ready, mounting immediately');
  mountApp();
}
