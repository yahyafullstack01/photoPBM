"use client";

import { useState, useEffect, createContext, useContext } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children, initialLanguage = "EN" }) {
  const [language, setLanguageState] = useState(initialLanguage);
  const [translations, setTranslations] = useState({});

  // Sync when server locale changes (e.g. client navigation to /es)
  useEffect(() => {
    if (initialLanguage && initialLanguage !== language) {
      setLanguageState(initialLanguage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialLanguage]);

  useEffect(() => {
    localStorage.setItem("preferredLanguage", language);
  }, [language]);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const res = await fetch("/locales/translations.json");
        if (!res.ok) throw new Error("Failed to fetch translations");
        const data = await res.json();
        setTranslations(data);
      } catch (error) {
        console.error("Error loading translations:", error);
      }
    };

    fetchTranslations();
  }, []);

  const setLanguage = (next) => {
    const value = typeof next === "function" ? next(language) : next;
    setLanguageState(value);
  };

  const translateList = (page, component) => {
    return translations[language]?.[page]?.[component] || "Missing translation";
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translateList }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};
