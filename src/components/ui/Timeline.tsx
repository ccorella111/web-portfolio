import type { TimelineEntry } from "../../types";
import { useLanguage } from "../../i18n/LanguageContext";
import { ChipList } from './ChipList';
import './Timeline.css';

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
    const { t } = useLanguage();

    return (
        <div className="timeline">
            {entries.map((entry) => (
                <article key={entry.title.es} className={`entry${entry.current ? ' entry--now' : ''}`}>
                    <div className="entry__period">
                        <i aria-hidden="true" />
                        <span>{t(entry.period)}</span>
                    </div>
                    <div className="entry__body">
                        <h3>{t(entry.title)}</h3>
                        <div className="entry__org">{t(entry.org)}</div>
                        {entry.bullets && (
                            <ul>
                                {entry.bullets.map((b) => <li key={b.es}>{t(b)}</li>)}
                            </ul>
                        )}
                        {entry.description && <p>{t(entry.description)}</p>}
                        {entry.tags && <ChipList items={entry.tags.map(t)} />}
                    </div>
                </article>
            ))}
        </div>
    );
}