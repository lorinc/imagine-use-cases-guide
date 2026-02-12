export interface Section {
  id: string;
  title: string;
  level: number;
  content: string;
  parent?: string;
  order: number;
  readingTime?: number;
}

export interface ParsedContent {
  title: string;
  sections: Section[];
  totalSections: number;
}

export interface NavigationItem {
  id: string;
  title: string;
  level: number;
  order: number;
  children?: NavigationItem[];
}
