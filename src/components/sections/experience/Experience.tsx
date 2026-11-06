import { experience } from "../../../data/experience";
import { ui } from "../../../data/ui";
import { useLanguage } from "../../../i18n/LanguageContext"; 
import { SectionBlock } from "../../ui/SectionBlock";
import { Timeline } from "../../ui/Timeline";

export function Experience() {
    const { t } = useLanguage();
    return (
        <SectionBlock id="experiencia" title={t(ui.sections.experience)}>
            <Timeline entries={experience} />
        </SectionBlock>
    )
}