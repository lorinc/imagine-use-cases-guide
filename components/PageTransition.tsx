'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if there's a navigation direction stored
    const navDirection = sessionStorage.getItem('navDirection') as 'up' | 'down' | null;
    
    if (navDirection) {
      setDirection(navDirection);
      setIsAnimating(true);
      
      // Clear the direction after reading it
      sessionStorage.removeItem('navDirection');
      
      // Remove animation class after animation completes
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setDirection(null);
      }, 600); // Match animation duration
      
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <div
      className={`
        ${isAnimating && direction === 'down' ? 'animate-slide-up-enter' : ''}
        ${isAnimating && direction === 'up' ? 'animate-slide-down-enter' : ''}
      `}
    >
      {children}
    </div>
  );
}
