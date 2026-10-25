import { useEffect, useState } from 'react';

interface ScrollState {
  /** Progreso de lectura de 0 a 1 */
  progress: number;
  /** true cuando la página ya no está arriba del todo */
  scrolled: boolean;
  /** id de la sección visible, o null */
  activeId: string | null;
}

/** Sigue el scroll para la barra de progreso y el menú activo */
export function useScroll(sectionIds: string[]): ScrollState {
  const [state, setState] = useState<ScrollState>({ progress: 0, scrolled: false, activeId: null });

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const marker = window.scrollY + window.innerHeight * 0.35;
      let activeId: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= marker) activeId = id;
      }
      setState({
        progress: max > 0 ? window.scrollY / max : 0,
        scrolled: window.scrollY > 10,
        activeId,
      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [sectionIds]);

  return state;
}
