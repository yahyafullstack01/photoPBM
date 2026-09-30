"use client";

import { ThemeProvider } from "../contexts/ThemeContext";
import { LanguageProvider } from "../Functions/useLanguage";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

export default function AppProviders({ children, initialLanguage = "EN" }) {
  return (
    <ThemeProvider>
      <LanguageProvider initialLanguage={initialLanguage}>
        <ErrorBoundary>{children}</ErrorBoundary>
      </LanguageProvider>
    </ThemeProvider>
  );
}
