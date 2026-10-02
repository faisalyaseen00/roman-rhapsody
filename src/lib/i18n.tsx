import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Lang, Localized } from "@/data/content";

type LanguageState = { lang: Lang; setLang: (lang: Lang) => void; text: (copy: Localized) => string };
const LanguageContext = createContext<LanguageState | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("it");
  const value = useMemo(() => ({ lang, setLang, text: (copy: Localized) => copy[lang] }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
