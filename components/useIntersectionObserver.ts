import { useState, useEffect, RefObject } from 'react';

interface ObserverOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  { threshold = 0.1, root = null, rootMargin = '0px' }: ObserverOptions = {}
): boolean => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    
    if (typeof window === 'undefined' || !('IntersectionObserver' in window) || !element) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(element); // Animate only once
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementRef, threshold, root, rootMargin]);

  return isIntersecting;
};

export default useIntersectionObserver;
