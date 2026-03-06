import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

function mountApp() {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error('Root element not found');
  }
  createRoot(rootElement).render(<App />);
}

// Wait for DOM to be ready before mounting React
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
