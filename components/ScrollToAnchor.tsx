'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToAnchor() {
  const pathname = usePathname();

  useEffect(() => {
    // Get the hash from the URL
    const hash = window.location.hash;
    
    if (hash) {
      // Remove the # symbol
      const id = hash.substring(1);
      
      // Wait for the page to render, then scroll to the element
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // No hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
