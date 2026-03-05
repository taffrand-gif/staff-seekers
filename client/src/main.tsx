import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

console.log('[DEBUG] main.tsx loaded');
console.log('[DEBUG] root element:', document.getElementById("root"));

try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error('Root element not found');
  }
  console.log('[DEBUG] Creating React root...');
  createRoot(rootElement).render(<App />);
  console.log('[DEBUG] React root created successfully');
} catch (error) {
  console.error('[DEBUG] Error mounting React:', error);
  document.body.innerHTML += `<div style="color: red; padding: 20px; background: #fee;">ERROR: ${error.message}</div>`;
}
// cache bust
