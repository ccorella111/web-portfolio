import { profile } from "../../../data/profile";
import { ui } from "../../../data/ui";
import { useLanguage } from "../../../i18n/LanguageContext";
import './Hero.css';

export function Hero() {
    const { t } = useLanguage();

    return (
        <header className="hero grid">
            <div className="hero__badge">
                <span className="availability"><i aria-hidden="true" />{t(profile.availability)}</span>
            </div>

            <h1 className="hero__name">
                <span className="hero__line"><span>{profile.firstName}</span></span>
                <span className="hero__line"><span>{profile.lastName}</span><span className="hero__dot">.</span></span>
            </h1>

            <div className="hero__role">
                {t(profile.degree)}<br />
                <em>{t(profile.school)}</em>
            </div>

            <div className="hero__summary">
                {t(profile.summary)}
                <div className="hero__cta">
                    <a className="btn" href="#proyectos">{t(ui.seeProjects)}<span className="btn_arrow">→</span></a>
                    <a className="btn btn--ghost" href="#contacto">{t(ui.getInTouch)}</a>
                </div>
            </div>
        </header>
    );
}