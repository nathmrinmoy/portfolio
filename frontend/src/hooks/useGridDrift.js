import { useEffect } from 'react';

// Drifts a section's background grid slowly as it scrolls past by setting
// --drift on the element. Skipped when the visitor prefers reduced motion.
export default function useGridDrift(ref, speed = 0.12) {
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let frame = 0;
    const update = () => {
      frame = 0;
      const top = el.getBoundingClientRect().top;
      el.style.setProperty('--drift', `${Math.round(top * -speed)}px`);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [ref, speed]);
}
