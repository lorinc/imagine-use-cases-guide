import { notFound } from 'next/navigation';
import { getH3Sections, getSectionById, getNextSection, getPreviousSection, getSectionPosition, getH4Children } from '@/lib/content';
import MarkdownContent from '@/components/MarkdownContent';
import AutoScrollNavigation from '@/components/AutoScrollNavigation';
import ProgressIndicator from '@/components/ProgressIndicator';
import ScrollToAnchor from '@/components/ScrollToAnchor';
import PageTransition from '@/components/PageTransition';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const sections = getH3Sections();
  return sections.map((section) => ({
    id: section.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const section = getSectionById(id);
  
  if (!section) {
    return {
      title: 'Section Not Found',
    };
  }

  return {
    title: `${section.title} - AI Guide for Imagine School`,
    description: section.content.substring(0, 160),
  };
}

export default async function SectionPage({ params }: PageProps) {
  const { id } = await params;
  const section = getSectionById(id);

  if (!section || section.level !== 3) {
    notFound();
  }

  const h4Children = getH4Children(id);
  const previous = getPreviousSection(id);
  const next = getNextSection(id);
  const position = getSectionPosition(id);

  return (
    <>
      <ScrollToAnchor />
      <AutoScrollNavigation 
        previous={previous} 
        next={next}
        currentSectionId={id}
      />
      
      <PageTransition>
        <article className="max-w-[700px] mx-auto px-6 py-12 md:py-16 mb-24">
          <ProgressIndicator 
            current={position.current} 
            total={position.total}
            readingTime={section.readingTime}
          />

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {section.title}
            </h1>
          </header>

          <MarkdownContent content={section.content} />

          {/* Render H4 subsections with anchors */}
          {h4Children.map((h4) => (
            <section 
              key={h4.id} 
              id={h4.id} 
              className="mt-12 scroll-mt-24 p-6 rounded-xl border border-border bg-sidebar/30"
            >
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {h4.title}
              </h2>
              <MarkdownContent content={h4.content} />
            </section>
          ))}
        </article>
      </PageTransition>
    </>
  );
}
