import fs from 'fs';
import path from 'path';

interface Section {
  id: string;
  title: string;
  level: number;
  content: string;
  parent?: string;
  order: number;
}

interface ParsedContent {
  title: string;
  sections: Section[];
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

function estimateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function parseMarkdown(markdownContent: string): ParsedContent {
  const lines = markdownContent.split('\n');
  const sections: Section[] = [];
  let currentH2: string | undefined;
  let currentH3: string | undefined;
  let currentH4: Section | undefined;
  let currentSection: Section | undefined;
  let currentContent: string[] = [];
  let title = '';
  let order = 0;

  const flushContent = () => {
    if (currentSection && currentContent.length > 0) {
      currentSection.content = currentContent.join('\n').trim();
      currentContent = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Extract main title (H1)
    if (line.startsWith('# ') && !title) {
      title = line.substring(2).trim();
      continue;
    }

    // H2 section
    if (line.startsWith('## ') && !line.startsWith('### ') && !line.startsWith('#### ')) {
      flushContent();
      const h2Title = line.substring(3).trim();
      currentH2 = slugify(h2Title);
      
      // Create H2 as a section
      const h2Section: Section = {
        id: currentH2,
        title: h2Title,
        level: 2,
        content: '',
        order: order++,
      };
      sections.push(h2Section);
      currentSection = h2Section;
      currentH3 = undefined;
      currentH4 = undefined;
      continue;
    }

    // H3 section
    if (line.startsWith('### ') && !line.startsWith('#### ')) {
      flushContent();
      const h3Title = line.substring(4).trim();
      const h3Id = slugify(h3Title);
      
      const h3Section: Section = {
        id: h3Id,
        title: h3Title,
        level: 3,
        content: '',
        parent: currentH2,
        order: order++,
      };
      sections.push(h3Section);
      currentSection = h3Section;
      currentH3 = h3Id;
      currentH4 = undefined;
      continue;
    }

    // H4 section
    if (line.startsWith('#### ')) {
      flushContent();
      const h4Title = line.substring(5).trim();
      const h4Id = slugify(h4Title);
      
      const h4Section: Section = {
        id: h4Id,
        title: h4Title,
        level: 4,
        content: '',
        parent: currentH3,
        order: order++,
      };
      sections.push(h4Section);
      currentSection = h4Section;
      currentH4 = h4Section;
      continue;
    }

    // Accumulate content
    if (currentSection) {
      currentContent.push(line);
    }
  }

  // Flush remaining content
  flushContent();

  return {
    title,
    sections: sections.filter(s => s.level === 2 || s.level === 3 || s.level === 4),
  };
}

// Main execution
const contentPath = path.join(process.cwd(), 'content', 'original.md');
const outputPath = path.join(process.cwd(), 'content', 'parsed.json');

const markdownContent = fs.readFileSync(contentPath, 'utf-8');
const parsed = parseMarkdown(markdownContent);

// Add reading time to each section
const sectionsWithMeta = parsed.sections.map(section => ({
  ...section,
  readingTime: estimateReadingTime(section.content),
}));

const output = {
  ...parsed,
  sections: sectionsWithMeta,
  totalSections: sectionsWithMeta.filter(s => s.level === 3).length,
};

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

console.log(`✓ Parsed ${output.totalSections} H3 sections`);
console.log(`✓ Output written to ${outputPath}`);
