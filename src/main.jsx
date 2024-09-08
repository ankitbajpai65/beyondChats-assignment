import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeContext from "./Context/ThemeProvider.jsx";
import { DataProvider } from "./Context/DataContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContext>
      <DataProvider>
        <App />
      </DataProvider>
    </ThemeContext>
  </StrictMode>
);
