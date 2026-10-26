import { marqueeTech } from "../../../data/profile";
import { ui } from "../../../data/ui";
import { useLanguage } from "../../../i18n/LanguageContext";
import './TechMarquee.css';

export function TechMarquee() {
    const { t } = useLanguage();

    return (
        <div className="marquee" role="region" aria-label={t(ui.techStrip)}>
            <div className="marquee__track">
                {[...marqueeTech, ...marqueeTech].map((tech, i) => (
                    <span key={i} aria-hidden={i >= marqueeTech.length || undefined}>{tech}</span>
                ))}
            </div>
        </div>
    );
}