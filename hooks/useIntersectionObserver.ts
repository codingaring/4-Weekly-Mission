import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver() {
  const targetRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const targetObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });

    if (targetRef.current) {
      targetObserver.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        targetObserver.unobserve(targetRef.current);
      }
    };
  }, [targetRef]);

  return { isVisible, targetRef };
}
