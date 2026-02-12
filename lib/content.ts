import { ParsedContent, Section, NavigationItem } from './types';
import parsedData from '@/content/parsed.json';

export function getContent(): ParsedContent {
  return parsedData as ParsedContent;
}

export function getAllSections(): Section[] {
  const content = getContent();
  return content.sections;
}

export function getH3Sections(): Section[] {
  return getAllSections().filter(s => s.level === 3);
}

export function getNavigableSections(): Section[] {
  return getAllSections().filter(s => s.level === 3 || s.level === 4);
}

export function getH4Children(h3Id: string): Section[] {
  return getAllSections().filter(s => s.level === 4 && s.parent === h3Id);
}

export function getSectionById(id: string): Section | undefined {
  return getAllSections().find(s => s.id === id);
}

export function getSectionByOrder(order: number): Section | undefined {
  const h3Sections = getH3Sections();
  return h3Sections.find(s => s.order === order);
}

export function getNextSection(currentId: string): Section | undefined {
  const h3Sections = getH3Sections();
  const currentIndex = h3Sections.findIndex(s => s.id === currentId);
  if (currentIndex === -1 || currentIndex === h3Sections.length - 1) {
    return undefined;
  }
  return h3Sections[currentIndex + 1];
}

export function getPreviousSection(currentId: string): Section | undefined {
  const h3Sections = getH3Sections();
  const currentIndex = h3Sections.findIndex(s => s.id === currentId);
  
  // If this is the first section, return a special "home" section
  if (currentIndex === 0) {
    return {
      id: 'home',
      title: 'Home',
      level: 1,
      content: '',
      order: -1,
    };
  }
  
  if (currentIndex <= 0) {
    return undefined;
  }
  
  return h3Sections[currentIndex - 1];
}

export function getSectionPosition(id: string): { current: number; total: number } {
  const h3Sections = getH3Sections();
  const currentIndex = h3Sections.findIndex(s => s.id === id);
  return {
    current: currentIndex + 1,
    total: h3Sections.length,
  };
}

export function getSectionUrl(section: Section): string {
  if (section.id === 'home' || section.level === 1) {
    return '/';
  } else if (section.level === 3) {
    return `/section/${section.id}`;
  } else if (section.level === 4 && section.parent) {
    return `/section/${section.parent}#${section.id}`;
  }
  return '/';
}

export function buildNavigationTree(): NavigationItem[] {
  const sections = getAllSections();
  const tree: NavigationItem[] = [];
  const sectionMap = new Map<string, NavigationItem>();

  sections.forEach(section => {
    const navItem: NavigationItem = {
      id: section.id,
      title: section.title,
      level: section.level,
      order: section.order,
      children: [],
    };

    sectionMap.set(section.id, navItem);

    if (section.level === 2) {
      // H2 goes to root
      tree.push(navItem);
    } else if (section.parent) {
      // H3 and H4 go under their parent
      const parent = sectionMap.get(section.parent);
      if (parent && parent.children) {
        parent.children.push(navItem);
      }
    }
  });

  return tree;
}

export function buildFullNavigationTree(): NavigationItem[] {
  const content = getContent();
  const tree: NavigationItem[] = [];
  
  // Add H1 as root
  tree.push({
    id: 'home',
    title: content.title,
    level: 1,
    order: -1,
    children: buildNavigationTree(),
  });

  return tree;
}
