import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./components/levelTwo/ThemeContext.jsx";
import { TodoContextProvider } from "./components/levelThree/TodoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
