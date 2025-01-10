import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import ReactQueryProvider from "./react-query";
import ReactRouterProvider from "./router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <ReactRouterProvider />
    </ReactQueryProvider>
  </StrictMode>,
);
