import { useEffect, useState } from "react";
import { useReducedMotion } from "../../../hooks/useReducedMotion";
import './GeometricTiles.css';

const COLORS = ['var(--green)', 'var(--amber)', 'var(--mint)', 'var(--black)', 'var(--coral)', 'var(--paper)'];
const SHAPES = ['0', '50%', '100% 0 0 0', '0 100% 0 0', '0 0 100% 0', '0 0 0 100%', '100% 100% 0 0'];

const INITIAL: [number, number][] = [
    [0,2], [1,1], [2,0], [3,5],
    [2,1], [0,0], [5,0], [1,3],
    [1,4], [3,1], [0,6], [2,3],
    [5,0], [4,2], [1,0], [0,1],
];

interface Tile { color: string; radius: string; rotation: number }

const random = <T,>(list: T[]) => list[Math.floor(Math.random() * list.length)];

export function GeometricTiles() {
    const reduced = useReducedMotion();
    const [tiles, setTiles] = useState<Tile[]>(() => 
        INITIAL.map(([c, s]) => ({ color: COLORS[c], radius: SHAPES[s], rotation: 0 })), 
    );

    useEffect(() => {
        if (reduced) return;
        const id = window.setInterval(() => {
            if (document.hidden) return;
            setTiles((prev) => {
                const next = [...prev];
                const i = Math.floor(Math.random() * next.length);
                const tile = { ...next[i] };
                tile.rotation += Math.random() < 0.5 ? 90 : -90;
                if (Math.random() < 0.5) tile.radius = random(SHAPES);
                if (Math.random() < 0.35) tile.color = random(COLORS);
                next[i] = tile;
                return next;
            });

        }, 700);
        return () => window.clearInterval(id);
    }, [reduced]);

    return (
        <div className="tiles" aria-hidden="true">
            {tiles.map((tile, i) => (
                <div key={i} className="tiles__cell">
                    <b style={{ backgroundColor: tile.color, borderRadius: tile.radius, transform: `rotate(${tile.rotation}deg)` }} />
                </div>
            ))}
        </div>
    );
}