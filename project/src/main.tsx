// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./styles/index.css";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import AppRouter from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
