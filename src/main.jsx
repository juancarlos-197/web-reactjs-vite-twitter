import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { Video } from "./components/Video/Video.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Video />
  </StrictMode>
);
