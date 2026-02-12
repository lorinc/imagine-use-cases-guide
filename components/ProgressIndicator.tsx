'use client';

import { Clock } from 'lucide-react';

interface ProgressIndicatorProps {
  current: number;
  total: number;
  readingTime?: number;
}

export default function ProgressIndicator({ current, total, readingTime }: ProgressIndicatorProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="mb-8 pb-6 border-b border-border">
      <div className="flex items-center justify-between text-sm text-secondary mb-3">
        <span>Section {current} of {total}</span>
        {readingTime && (
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {readingTime} min read
          </span>
        )}
      </div>
      
      <div className="w-full bg-border rounded-full h-1.5 overflow-hidden">
        <div
          className="bg-accent h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
