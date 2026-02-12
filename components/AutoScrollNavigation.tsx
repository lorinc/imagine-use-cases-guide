'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Section } from '@/lib/types';
import { getSectionUrl } from '@/lib/content';

interface AutoScrollNavigationProps {
  previous?: Section;
  next?: Section;
  currentSectionId: string;
}

export default function AutoScrollNavigation({ previous, next, currentSectionId }: AutoScrollNavigationProps) {
  const router = useRouter();
  const [showTopBar, setShowTopBar] = useState(false);
  const [showBottomBar, setShowBottomBar] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0); // 0-100%
  const [isNavigating, setIsNavigating] = useState(false);
  const lastScrollY = useRef(0);
  const scrollStartY = useRef(0);
  const isAtEdge = useRef(false);

  useEffect(() => {
    let ticking = false;
    const SCROLL_THRESHOLD = 50; // 50% of viewport height

    const handleWheel = (e: WheelEvent) => {
      if (isNavigating) return;

      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const atTop = scrollTop <= 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

      // Check if trying to scroll beyond boundaries
      if ((atTop && e.deltaY < 0 && previous) || (atBottom && e.deltaY > 0 && next)) {
        if (!isAtEdge.current) {
          // Just reached the edge
          isAtEdge.current = true;
          scrollStartY.current = 0;
        }

        // Accumulate scroll distance
        scrollStartY.current += Math.abs(e.deltaY);
        
        // Calculate progress as percentage of viewport height
        const maxScroll = clientHeight * (SCROLL_THRESHOLD / 100);
        const progress = Math.min((scrollStartY.current / maxScroll) * 100, 100);
        setScrollProgress(progress);

        // Show appropriate bar
        if (atTop && e.deltaY < 0) {
          setShowTopBar(true);
          setShowBottomBar(false);
        } else if (atBottom && e.deltaY > 0) {
          setShowBottomBar(true);
          setShowTopBar(false);
        }

        // Navigate if threshold reached
        if (progress >= 100) {
          setIsNavigating(true);
          if (atTop && previous) {
            router.push(getSectionUrl(previous));
          } else if (atBottom && next) {
            router.push(getSectionUrl(next));
          }
        }
      } else {
        // Not at edge or scrolling back into page
        if (isAtEdge.current) {
          isAtEdge.current = false;
          scrollStartY.current = 0;
          setScrollProgress(0);
          setShowTopBar(false);
          setShowBottomBar(false);
        }
      }
    };

    const handleScroll = () => {
      if (!ticking && !isNavigating) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const scrollHeight = document.documentElement.scrollHeight;
          const clientHeight = window.innerHeight;
          const atTop = scrollTop <= 0;
          const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

          // If scrolling away from edge, reset
          if (!atTop && !atBottom && isAtEdge.current) {
            isAtEdge.current = false;
            scrollStartY.current = 0;
            setScrollProgress(0);
            setShowTopBar(false);
            setShowBottomBar(false);
          }

          lastScrollY.current = scrollTop;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [previous, next, isNavigating, router]);

  // Reset navigation state when section changes
  useEffect(() => {
    setIsNavigating(false);
    setScrollProgress(0);
    isAtEdge.current = false;
    scrollStartY.current = 0;
    window.scrollTo(0, 0);
  }, [currentSectionId]);

  return (
    <>
      {/* Top bar for previous section */}
      {previous && (
        <div
          className={`
            fixed top-0 left-0 right-0 md:left-[320px] 
            bg-sidebar/95 backdrop-blur-sm border-b border-border
            transition-all duration-300 ease-out z-30
            ${showTopBar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
          `}
        >
          <div className="max-w-[700px] mx-auto px-6 py-3">
            <div className="flex items-center justify-between text-sm mb-2">
              <div className="flex items-center gap-2 text-secondary">
                <ChevronUp size={16} className="text-accent" />
                <span className="hidden sm:inline">Continue scrolling up for previous</span>
                <span className="sm:hidden">Scroll up for previous</span>
              </div>
              <div className="text-foreground font-medium truncate ml-4 max-w-[200px] sm:max-w-none">
                {previous.title}
              </div>
            </div>
            {/* Progress bar */}
            <div className="w-full bg-border/50 rounded-full h-1 overflow-hidden">
              <div
                className="bg-accent h-full rounded-full transition-all duration-100 ease-out"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Bottom bar for next section */}
      {next && (
        <div
          className={`
            fixed bottom-0 left-0 right-0 md:left-[320px]
            bg-sidebar/95 backdrop-blur-sm border-t border-border
            transition-all duration-300 ease-out z-30
            ${showBottomBar ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
          `}
        >
          <div className="max-w-[700px] mx-auto px-6 py-3">
            {/* Progress bar */}
            <div className="w-full bg-border/50 rounded-full h-1 overflow-hidden mb-2">
              <div
                className="bg-accent h-full rounded-full transition-all duration-100 ease-out"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="text-foreground font-medium truncate mr-4 max-w-[200px] sm:max-w-none">
                {next.title}
              </div>
              <div className="flex items-center gap-2 text-secondary whitespace-nowrap">
                <span className="hidden sm:inline">Continue scrolling down to continue</span>
                <span className="sm:hidden">Scroll down to continue</span>
                <ChevronDown size={16} className="text-accent" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
