import type { Project } from "../../../types";
import { ui } from "../../../data/ui";
import { useLanguage } from "../../../i18n/LanguageContext";
import { ChipList } from "../../ui/ChipList";
import { ProjectCover } from './ProjectCover';

function LockIcon() {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
            <rect x="4" y="11" width="16" height="10" rx="1" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        </svg>
    ); 
}

export function ProjectCard({ project }: {project: Project}) {
    const { t } = useLanguage();
    const { link } = project;

    return (
        <article className="project">
            <ProjectCover variant={project.cover} label={t(project.status)} />
            <div className="project__body">
                <div className="project__category">{t(project.category)}</div>
                <h3>{t(project.name)}</h3>
                <p>{t(project.description)}</p>
                <ChipList items={project.stack} />

                {link.kind === 'private' ? (
                    <div className="project__link project__link--private">
                        <span>{t(ui.privateCode)}</span>
                        <LockIcon />
                    </div>
                ):(
                    <a className="project__link" href={link.url} target="_blank" rel="noopener noreferrer">
                        <span>{t(link.kind === 'repo' ? ui.viewRepo : ui.viewLive)}</span>
                        <span className="project__arrow">→</span>
                    </a>
                )}
            </div>
        </article>
    );
}