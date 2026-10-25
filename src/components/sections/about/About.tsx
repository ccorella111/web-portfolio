import { profile } from "../../../data/profile";
import { ui } from "../../../data/ui";
import { useLanguage } from "../../../i18n/LanguageContext";
import { SectionBlock } from "../../ui/SectionBlock";
import './About.css';

export function About() {
    const { t } = useLanguage();

    return (
        <SectionBlock id="perfil" title={t(ui.sections.profile)}>
            <p className="about__lead">
                {t(profile.about.leadBefore)}
                <mark>{t(profile.about.leadMark)}</mark>
            </p>
            <p>{t(profile.about.body)}</p>
        </SectionBlock>
    );
}