import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// main.jsx
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
