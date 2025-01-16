// useTiltEffect.js
import { useRef, useEffect } from 'react';

const useTiltEffect = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { offsetX, offsetY, target } = e;
      const { clientWidth, clientHeight } = target;

      // Calculate the tilt angle with more pronounced effect
      const tiltX = ((offsetY - clientHeight / 2) / clientHeight) * 30;
      const tiltY = ((offsetX - clientWidth / 2) / clientWidth) * -30;

      containerRef.current.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      containerRef.current.style.transition = 'transform 0.1s ease-out';
    };

    const handleMouseLeave = () => {
      containerRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
      containerRef.current.style.transition = 'transform 0.3s ease-in';
    };

    const container = containerRef.current;

    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return containerRef;
};

export default useTiltEffect;
