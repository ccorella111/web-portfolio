import { profile } from "../../data/profile";
import { ui } from "../../data/ui";
import { useLanguage } from "../../i18n/LanguageContext";
import './Footer.css';

export function Footer() {
    const { t } = useLanguage();
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="wrap footer__inner">
                <span>© {year} {profile.firstName} {profile.lastName}</span>
                <span>{t(ui.madeIn)}</span>
            </div>
        </footer>
    );
}