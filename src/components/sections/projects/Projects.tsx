import { useState } from 'react';
import { projects } from '../../../data/projects';
import { ui } from '../../../data/ui';
import { useLanguage } from '../../../i18n/LanguageContext';
import { SectionBlock } from '../../ui/SectionBlock';
import { ProjectCard } from './ProjectCard';
import { ProjectDialog } from './ProjectDialog';
import './Projects.css';

export function Projects() {
  const { t } = useLanguage();
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const openProject = projects.find((p) => p.slug === openSlug) ?? null;

  return (
    <SectionBlock id="proyectos" title={t(ui.sections.projects)}>
      <div className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} onOpenDetails={setOpenSlug} />
        ))}
      </div>
      <ProjectDialog project={openProject} onClose={() => setOpenSlug(null)} />
    </SectionBlock>
  );
}
