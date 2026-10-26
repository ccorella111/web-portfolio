import { useRef } from "react";
import { contact } from "../../../data/profile";
import { ui } from "../../../data/ui";
import { useLanguage } from "../../../i18n/LanguageContext";
import { CopyButton } from "../../ui/CopyButton";
import './Contact.css';

export function Contact() {
    const { t } = useLanguage();
    const emailRef = useRef<HTMLSpanElement>(null);

    return (
        <section className="contact" id="contacto">
            <span className="contact__orb contact__orb--ring" aria-hidden="true" />
            <span className="contact__orb contact__orb--leaf" aria-hidden="true" />

            <div className="wrap grid contact__inner">
                <h2>
                    {t(ui.contactTitleBefore)}<em>{t(ui.contactTitleEm)}</em>.
                </h2>

                <div className="contact__list">
                    {contact.map((item) => (
                        <div key={item.label}>
                            <small>{item.label}</small>
                            {item.url ? (
                                <a href={item.url} target="_blank" rel="noopener noreferrer">{item.value}</a>
                            ):(
                                <div className="contact__row">
                                    <span ref={item.copyable ? emailRef : undefined} className="contact__value">{item.value}</span>
                                    {item.copyable && <CopyButton value={item.value} fallbackTarget={emailRef} className="contact__copy" />}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}