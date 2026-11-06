import { useEffect, useRef, useState } from 'react';
import type { ImageKind, ProjectImage } from '../../../types';
import { ui } from '../../../data/ui';
import { useLanguage } from '../../../i18n/LanguageContext';


const KIND_ORDER: ImageKind[] = ['architecture', 'database', 'results', 'screenshot'];

const imageUrl = (src: string) => `${import.meta.env.BASE_URL}${src}`;

const pad = (n: number) => String(n).padStart(2, '0');


export function ProjectGallery({ images }: { images: ProjectImage[] }) {
  const { t } = useLanguage();
  const ordered = KIND_ORDER.flatMap((kind) => images.filter((img) => img.kind === kind));
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="gallery">
      {KIND_ORDER.map((kind) => {
        const group = ordered.filter((img) => img.kind === kind);
        if (group.length === 0) return null;
        return (
          <div key={kind} className="gallery__group">
            <h4 className="gallery__kind">{t(ui.galleryKinds[kind])}</h4>
            <div className={`gallery__grid gallery__grid--${kind}`}>
              {group.map((img) => {
                const index = ordered.indexOf(img);
                return (
                  <figure key={img.src} className="figure">
                    <button type="button" className="figure__frame" onClick={() => setActive(index)}>
                      <img src={imageUrl(img.src)} alt={t(img.alt)} loading="lazy" />
                      <span className="figure__zoom" aria-hidden="true">+</span>
                    </button>
                    <figcaption>
                      <span>{t(ui.figure)} {pad(index + 1)}</span> {t(img.caption)}
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        );
      })}

      <Lightbox images={ordered} index={active} onChange={setActive} />
    </div>
  );
}

interface LightboxProps {
  images: ProjectImage[];
  index: number | null;
  onChange: (index: number | null) => void;
}

function Lightbox({ images, index, onChange }: LightboxProps) {
  const { t } = useLanguage();
  const ref = useRef<HTMLDialogElement>(null);
  const image = index === null ? null : images[index];
  const total = images.length;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) dialog.showModal();
    if (index === null && dialog.open) dialog.close();
  }, [index]);

  const go = (step: number) => {
    if (index === null) return;
    onChange((index + step + total) % total);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowRight') go(1);
    if (event.key === 'ArrowLeft') go(-1);
  };

  return (
    <dialog
      ref={ref}
      className="lightbox"
      onClose={() => onChange(null)}
      onKeyDown={handleKeyDown}
      onClick={(e) => { if (e.target === e.currentTarget) ref.current?.close(); }}
    >
      {image && index !== null && (
        <figure className="lightbox__figure">
          <img src={imageUrl(image.src)} alt={t(image.alt)} />
          <figcaption>
            <span>{t(ui.figure)} {pad(index + 1)} / {pad(total)}</span> {t(image.caption)}
          </figcaption>
        </figure>
      )}
      <div className="lightbox__controls">
        {total > 1 && (
          <>
            <button type="button" onClick={() => go(-1)} aria-label={t(ui.previous)}>←</button>
            <button type="button" onClick={() => go(1)} aria-label={t(ui.next)}>→</button>
          </>
        )}
        <button type="button" onClick={() => ref.current?.close()} aria-label={t(ui.close)}>×</button>
      </div>
    </dialog>
  );
}
