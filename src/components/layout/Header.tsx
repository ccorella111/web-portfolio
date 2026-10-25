import { nav, ui } from '../../data/ui';
import { profile } from '../../data/profile';
import { useLanguage } from '../../i18n/LanguageContext';
import { useScroll } from '../../hooks/useScroll';
import type { Lang } from '../../types';
import './Header.css'

const SECTION_IDS = nav.map((item) => item.id);
const LANGS: Lang[] = ['es', 'en'];

export function Header() {
    const { lang, setLang, t } = useLanguage();
    const { progress, scrolled, activeId } = useScroll(SECTION_IDS);

    return (
        <>
            <div className='progress' style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
            <header className={`topbar${scrolled ? ' topbar--scrolled' : ''}`}>
                <div className='wrap topbar__inner'>
                    <a className='brand' href='#inicio'>
                        <i aria-hidden="true"><b /><b /><b /><b /></i>
                        {profile.shortName}
                    </a>

                    <nav className="topbar__nav" aria-label="Principal">
                        {nav.map((item) => (
                            <a key={item.id} href={`#${item.id}`} className={activeId === item.id ? 'is-active' : undefined}>
                                {t(item.label)}
                            </a>
                        ))}
                    </nav>

                    <div className="lang-switch" role="group" aria-label={t(ui.languageGroup)}>
                        {LANGS.map((code) => (
                            <button key={code} type="button" aria-pressed={lang === code} onClick={() => setLang(code)}>
                                {code.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            </header>
        </>
    )

}