// import "./styles/index.css";
// import React from "react";
// import ReactDOM from "react-dom/client";
// import AppRouter from "./router";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <AppRouter />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { LanguageProvider } from "./LanguageProvider";
import AppRouter from "./router";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <AppRouter />
    </LanguageProvider>
  </React.StrictMode>
);
