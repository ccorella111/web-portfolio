import type { CSSProperties } from "react";
import type { CoverVariant } from "../../../types";

interface Shape {
    motion: 'a' | 'b' | 'c';
    style: CSSProperties;
}

const COVERS: Record<CoverVariant, Shape[]> = {
    green: [
        { motion: 'a', style: { width: '46%', aspectRatio: '1', left: '10%', top: '16%', background: 'var(--mint)', borderRadius: '100% 0 0 0' } },
        { motion: 'c', style: { width: '26%', aspectRatio: '1', right: '12%', top: '22%', background: 'var(--amber)', borderRadius: '50%' } },
        { motion: 'b', style: { width: '38%', height: '14%', right: 0, bottom: '22%', background: 'var(--white)' } },
    ],
    amber: [
        { motion: 'c', style: { width: '40%', aspectRatio: '1', left: '12%', top: '18%', background: 'var(--black)', borderRadius: '50%' } },
        { motion: 'a', style: { width: '34%', aspectRatio: '1', right: '10%', bottom: '10%', background: 'var(--white)', borderRadius: '0 100% 0 0' } },
        { motion: 'b', style: { width: '22%', height: '22%', right: '18%', top: '12%', background: 'var(--green)' } },
    ],
    black: [
        { motion: 'c', style: { width: '30%', aspectRatio: '1', left: '14%', top: '20%', border: '10px solid var(--mint)', borderRadius: '50%' } },
        { motion: 'a', style: { width: '36%', aspectRatio: '1', right: '12%', top: '14%', background: 'var(--amber)', borderRadius: '0 0 100% 0' } },
        { motion: 'b', style: { width: '44%', height: '12%', left: '30%', bottom: '20%', background: 'var(--coral)' } },
    ],
};

export function ProjectCover({ variant, label }: { variant: CoverVariant; label: string }) {
    return (
        <div className={`cover cover--${variant}`}>
            {COVERS[variant].map((shape,i) => (
                <div key={i} className={`cover__shape cover__shape--${shape.motion}`} style={shape.style} />
            ))}
            <span className="cover__label">{label}</span>
        </div>
    );
}