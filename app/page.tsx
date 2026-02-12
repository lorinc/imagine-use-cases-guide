import { getH3Sections } from "@/lib/content";
import AutoScrollNavigation from "@/components/AutoScrollNavigation";
import PageTransition from "@/components/PageTransition";
import { ChevronDown } from "lucide-react";

export default function Home() {
  const h3Sections = getH3Sections();
  const firstSection = h3Sections[0];

  return (
    <>
      <AutoScrollNavigation 
        next={firstSection}
        currentSectionId="home"
      />
      
      <PageTransition>
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 md:py-24 mb-24">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            AI Use Case Evaluation Guide
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold text-accent">
            Learn how to identify AI opportunities that actually work
          </p>
          
          <div className="text-lg md:text-xl text-secondary leading-relaxed space-y-4 max-w-2xl mx-auto">
            <p>
              This guide goes beyond typical AI hype to give you a practical framework for evaluating which AI tools will genuinely help your school—and which ones won't. Whether you're exploring your first AI implementation or refining your approach, you'll gain transferable skills for making technology decisions that stick.
            </p>
            
            <p>
              Inside, you'll find clear criteria for assessing AI use cases, real examples from Imagine Montessori settings, and a systematic approach you can apply to any new tool or initiative.
            </p>
          </div>
          
          {/* Animated scroll indicator */}
          <div className="flex flex-col items-center gap-2 animate-bounce pt-8">
            <ChevronDown size={32} className="text-accent" />
            <ChevronDown size={32} className="text-accent -mt-6 opacity-60" />
          </div>
        </div>
        </div>
      </PageTransition>
    </>
  );
}
