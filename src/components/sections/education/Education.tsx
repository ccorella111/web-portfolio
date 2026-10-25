import { education } from "../../../data/education";
import { ui } from "../../../data/ui";
import { useLanguage } from "../../../i18n/LanguageContext"; 
import { SectionBlock } from "../../ui/SectionBlock";
import { Timeline } from "../../ui/Timeline";

export function Education() {
    const { t } = useLanguage();
    return (
        <SectionBlock id="formacion" title={t(ui.sections.education)}>
            <Timeline entries={education} />
        </SectionBlock>
    )
}