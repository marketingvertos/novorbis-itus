import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./lib/legacy-globals";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
