import { useEffect, useRef } from 'react';
import type { Project } from '../../../types';
import { ui } from '../../../data/ui';
import { useLanguage } from '../../../i18n/LanguageContext';
import { ChipList } from '../../ui/ChipList';
import { ProjectGallery } from './ProjectGallery';
import './ProjectDialog.css';

interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const { t } = useLanguage();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const details = project?.details;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project && !dialog.open) {
      dialog.showModal();
      dialog.scrollTop = 0;
      document.documentElement.classList.add('no-scroll');
    }
    if (!project && dialog.open) dialog.close();
  }, [project]);


  const handleClose = (event: React.SyntheticEvent<HTMLDialogElement>) => {
    if (event.target !== event.currentTarget) return;
    document.documentElement.classList.remove('no-scroll');
    onClose();
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) dialogRef.current?.close();
  };

  return (
    <dialog
      ref={dialogRef}
      className="pdialog"
      aria-labelledby="pdialog-title"
      onClose={handleClose}
      onClick={handleBackdropClick}
    >
      {project && details && (
        <div className="pdialog__panel">
          <header className="pdialog__bar">
            <span className="pdialog__meta">
              {t(project.category)} · <b>{t(project.status)}</b>
            </span>
            <button type="button" className="pdialog__close" onClick={() => dialogRef.current?.close()} aria-label={t(ui.close)}>
              <span aria-hidden="true">×</span>
            </button>
          </header>

          <div className="pdialog__content">
            <div className="pdialog__intro">
              <h2 id="pdialog-title" className="pdialog__title">{t(project.name)}</h2>
              <p className="pdialog__overview">{t(details.overview)}</p>
              <ChipList items={project.stack} />
            </div>

            <div className="pdialog__cols">
              <section>
                <h3 className="pdialog__h">{t(ui.details.features)}</h3>
                <ul className="pdialog__list">
                  {details.features.map((f) => <li key={f.es}>{t(f)}</li>)}
                </ul>
              </section>

              {details.tech && (
                <section>
                  <h3 className="pdialog__h">{t(ui.details.tech)}</h3>
                  <dl className="pdialog__tech">
                    {details.tech.map((row) => (
                      <div key={row.area.es}>
                        <dt>{t(row.area)}</dt>
                        <dd>{row.items}</dd>
                      </div>
                    ))}
                  </dl>
                </section>
              )}
            </div>

            {details.highlights && (
              <section>
                <h3 className="pdialog__h">{t(ui.details.highlights)}</h3>
                <ol className="pdialog__highlights">
                  {details.highlights.map((h) => <li key={h.es}>{t(h)}</li>)}
                </ol>
              </section>
            )}

            {details.gallery.length > 0 && (
              <section>
                <h3 className="pdialog__h">{t(ui.details.gallery)}</h3>
                <ProjectGallery images={details.gallery} />
              </section>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
