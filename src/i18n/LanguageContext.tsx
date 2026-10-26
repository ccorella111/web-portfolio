import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Lang, Text } from '../types';

const STORAGE_KEY = 'cc-lang';

interface LanguageContextValue {
    lang: Lang;
    setLang: (lang: Lang) => void;
    t: (text: Text) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredlang(): Lang {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'es' || saved === 'en') return saved;
    }catch{

    }
    return 'es';
}

export function LanguageProvider({ children }: { children: ReactNode }){
    const [lang, setLangState] = useState<Lang>(readStoredlang);

    const setLang = useCallback((next: Lang) => {
        setLangState(next);
        try {
            localStorage.setItem(STORAGE_KEY, next);
        }catch {

        }
    }, []);

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    const value = useMemo<LanguageContextValue>(
        () => ({ lang, setLang, t: (text) => text[lang] }),
        [lang, setLang],
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage debe usarse dentro de <LanguageProvider>');
    return ctx;
}