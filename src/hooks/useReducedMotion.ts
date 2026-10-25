import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

/** true si el usuario pidió reducir animaciones en su sistema */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(() => window.matchMedia(QUERY).matches);

  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}
