import { skills } from "../../../data/skills";
import { ui } from "../../../data/ui";
import { useLanguage } from "../../../i18n/LanguageContext";
import { SectionBlock } from "../../ui/SectionBlock";
import './Skills.css';

export function Skills() {
    const { t } = useLanguage();

    return (
        <SectionBlock title={t(ui.sections.skills)}>
            <div className="skills">
                {skills.map((group) => (
                    <div key={group.title.es} className="skill">
                        <h4>{t(group.title)}</h4>
                        <p>{t(group.items)}</p>
                    </div>
                ))}
            </div>
        </SectionBlock>
    );
}