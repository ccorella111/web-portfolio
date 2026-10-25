import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const reduced = useReducedMotion();
  const [waiting, setWaiting] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced || !('IntersectionObserver' in window)) {
      setEntered(true);
      return;
    }
    if (el.getBoundingClientRect().top > window.innerHeight) setWaiting(true);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWaiting(false);
          setEntered(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  const className = ['rv', waiting && 'wait', entered && 'in'].filter(Boolean).join(' ');
  return { ref, className };
}
