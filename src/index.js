import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataContextProvider } from "./components/DataContext";

ReactDOM.render(
  <React.StrictMode>
    <DataContextProvider url="https://raw.githubusercontent.com/D-mser/seneca-toggler/main/src/data/questions.json">
      <App />
    </DataContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
