import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { LoadingProviders } from "@providers/LoadingProviders.tsx";
import { ThemeProvider } from "@providers/ThemeProviders.tsx";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LoadingProviders>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </LoadingProviders>
  </StrictMode>
);
