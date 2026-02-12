'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Section } from '@/lib/types';

interface SectionNavigationProps {
  previous?: Section;
  next?: Section;
}

export default function SectionNavigation({ previous, next }: SectionNavigationProps) {
  return (
    <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
      <div className="flex-1">
        {previous && (
          <Link
            href={`/section/${previous.id}`}
            className="inline-flex items-center gap-2 text-accent hover:text-foreground transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <div>
              <div className="text-xs text-secondary uppercase tracking-wide">Previous</div>
              <div className="font-medium">{previous.title}</div>
            </div>
          </Link>
        )}
      </div>
      
      <div className="flex-1 text-right">
        {next && (
          <Link
            href={`/section/${next.id}`}
            className="inline-flex items-center gap-2 text-accent hover:text-foreground transition-colors group"
          >
            <div>
              <div className="text-xs text-secondary uppercase tracking-wide">Next</div>
              <div className="font-medium">{next.title}</div>
            </div>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  );
}
