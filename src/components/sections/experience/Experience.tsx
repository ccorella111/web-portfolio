import { experience } from "../../../data/experience";
import { ui } from "../../../data/ui";
import { useLanguage } from "../../../i18n/LanguageContext"; 
import { SectionBlock } from "../../ui/SectionBlock";
import { Timeline } from "../../ui/Timeline";

export function Experience() {
    const { t } = useLanguage();
    return (
        <SectionBlock id="experience" title={t(ui.sections.experience)}>
            <Timeline entries={experience} />
        </SectionBlock>
    )
}