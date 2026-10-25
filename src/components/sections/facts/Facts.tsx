import { facts } from "../../../data/profile";
import { useLanguage } from "../../../i18n/LanguageContext";
import { useReveal } from "../../../hooks/useReveal";
import './Facts.css';

export function Facts(){
    const { t } = useLanguage();
    const { ref, className } = useReveal<HTMLDivElement>();

    return (
        <div ref={ref} className={`facts grid ${className}`}>
            {facts.map((fact) => (
                <div key={fact.label.es} className="facts__item">
                    <small>{t(fact.label)}</small>
                    <b>
                        {fact.before && t(fact.before)}
                        <span className="facts__hl">{t(fact.highlight)}</span>
                        {fact.after && t(fact.after)}
                    </b>
                </div>
            ))}
        </div>
    );
}