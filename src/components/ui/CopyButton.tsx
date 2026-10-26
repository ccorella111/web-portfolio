import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import { ui } from "../../data/ui";

interface CopyButtonProps {
    value: string;
    fallbackTarget?: React.RefObject<HTMLElement | null>;
    className?: string;
}

export function CopyButton({ value, fallbackTarget, className }: CopyButtonProps ) {
    const { t } = useLanguage();
    const [copied, setCopied] = useState(false);
    const timer = useRef<number | undefined>(undefined);

    useEffect(() => () => window.clearTimeout(timer.current), []);

    const selectFallback = () => {
        const el = fallbackTarget?.current;
        if (!el) return;
        const range = document.createRange();
        range.selectNodeContents(el);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
    };

    const handleClick = async () => {
        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            window.clearTimeout(timer.current);
            timer.current = window.setTimeout(() => setCopied(false), 1600);
        }catch {
            selectFallback();
        }
    };

    return (
        <button type="button" className={className} onClick={handleClick}>
            {t(copied ? ui.copied : ui.copy)}
        </button>
    );
}