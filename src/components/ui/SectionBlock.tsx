import type { ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";
import './SectionBlock.css';

interface SectionBlockProps {
    id?: string;
    title: string;
    children: ReactNode;
}

export function SectionBlock({ id, title, children }: SectionBlockProps) {
    const heading = useReveal<HTMLHeadingElement>();
    const content = useReveal<HTMLDivElement>();

    return (
        <section id={id} className="section grid">
            <h2 ref={heading.ref} className={`section__title ${heading.className}`}>
                {title}
            </h2>
            <div ref={content.ref} className={`section__content ${content.className}`}>
                {children}
            </div>
        </section>
    );
}