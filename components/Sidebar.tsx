'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavigationItem } from '@/lib/types';

interface SidebarProps {
  navigation: NavigationItem[];
  currentSectionId?: string;
}

export default function Sidebar({ navigation, currentSectionId }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const renderNavItem = (item: NavigationItem, depth: number = 0, parentId?: string) => {
    const isActive = currentSectionId === item.id || pathname === `/section/${item.id}`;
    const isHome = item.id === 'home' && pathname === '/';
    
    // For H3 sections, check if we're currently viewing this section (including via H4 anchors)
    const isCurrentH3Section = item.level === 3 && pathname === `/section/${item.id}`;
    
    // For H4 sections, check if parent H3 is the current page
    const isH4InCurrentSection = item.level === 4 && parentId && pathname === `/section/${parentId}`;
    
    const isCurrentPage = isActive || isHome || isCurrentH3Section || isH4InCurrentSection;
    
    // Calculate indentation based on level
    const getIndentation = (level: number) => {
      if (level === 1) return '';
      if (level === 2) return '';
      if (level === 3) return 'ml-0';
      if (level === 4) return 'ml-4';
      return '';
    };

    const getTextSize = (level: number) => {
      if (level === 1) return 'text-base';
      if (level === 2) return 'text-xs';
      if (level === 3) return 'text-sm';
      if (level === 4) return 'text-xs';
      return 'text-sm';
    };

    // For H4, link to anchor within parent H3 page
    const getHref = () => {
      if (item.level === 1) return '/';
      if (item.level === 4 && parentId) return `/section/${parentId}#${item.id}`;
      return `/section/${item.id}`;
    };
    
    return (
      <li key={item.id} className={getIndentation(item.level)}>
        {item.level === 1 ? (
          // H1 - Main title, links to home
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className={`block py-2 text-base font-bold transition-colors ${
              isHome ? 'text-accent' : 'text-foreground hover:text-accent'
            }`}
          >
            {item.title}
          </Link>
        ) : item.level === 2 ? (
          // H2 - Section headers (not clickable, just labels)
          <div className="mt-4 mb-2">
            <div className="text-xs font-semibold text-secondary uppercase tracking-wider">
              {item.title}
            </div>
          </div>
        ) : (
          // H3 and H4 - Clickable navigation items
          <Link
            href={getHref()}
            onClick={() => setIsOpen(false)}
            className={`
              block py-1.5 px-3 rounded transition-all
              ${getTextSize(item.level)}
              ${isCurrentPage
                ? 'bg-accent/10 text-accent font-medium border-l-2 border-accent' 
                : 'text-foreground hover:bg-border/50 hover:text-accent border-l-2 border-transparent'
              }
            `}
          >
            {item.title}
          </Link>
        )}
        
        {item.children && item.children.length > 0 && (
          <ul className={`space-y-0.5 ${item.level === 1 ? 'mt-2' : 'mt-1'}`}>
            {item.children.map((child) => renderNavItem(child, depth + 1, item.id))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-accent text-white p-2 rounded-lg shadow-lg"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-sidebar border-r border-border
          transition-transform duration-300 ease-in-out z-40
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          w-[320px] overflow-y-auto
        `}
      >
        <div className="p-6">
          <nav>
            <ul className="space-y-1">
              {navigation.map((item) => renderNavItem(item))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
