import { projects } from '../../../data/projects';
import { ui } from '../../../data/ui';
import { useLanguage } from '../../../i18n/LanguageContext';
import { SectionBlock } from '../../ui/SectionBlock';
import { ProjectCard } from './ProjectCard';
import './Projects.css';

export function Projects() {
    const { t } = useLanguage();

    return (
        <SectionBlock id='proyectos' title={t(ui.sections.projects)}>
            <div className='projects'>
                {projects.map((project) => (
                    <ProjectCard key={project.name.es} project={project} />
                ))}
            </div>
        </SectionBlock>
    );
}