import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router";

createRoot(document.getElementById("root")!).render(
  <Router>
    <App />
  </Router>
);
