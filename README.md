# AI Use Case Evaluation Guide - Imagine School

A beautiful, accessible static website presenting a comprehensive AI evaluation guide for Montessori school administrators. Built with Next.js, featuring warm Montessori-inspired design and intuitive navigation.

## Features

- 📚 **16 digestible sections** - Content broken down at H3 level for easy reading
- 🎨 **Warm Montessori design** - Earth tones, readable typography, generous spacing
- 📱 **Fully responsive** - Works beautifully on mobile, tablet, and desktop
- 🧭 **Intuitive navigation** - Sidebar TOC, previous/next buttons, progress indicators
- ⚡ **Fast & static** - Pre-rendered for optimal performance
- ♿ **Accessible** - WCAG 2.1 AA compliant

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create optimized static build
npm run build

# The static site will be in the 'out' directory
```

## Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Build and deployment", select "GitHub Actions" as the source
   - The workflow will automatically deploy on every push to main

3. **Configure base path (if using subdirectory):**
   - If deploying to `username.github.io/repo-name`, edit `next.config.ts`:
   ```typescript
   basePath: '/repo-name',
   ```

### Option 2: Manual Deployment

```bash
# Build the site
npm run build

# The 'out' directory contains your static site
# Upload this to any static hosting service
```

## Project Structure

```
proposal-site/
├── app/
│   ├── layout.tsx          # Root layout with sidebar
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles & theme
│   └── section/[id]/       # Dynamic section pages
├── components/
│   ├── Sidebar.tsx         # Navigation sidebar
│   ├── MarkdownContent.tsx # Markdown renderer
│   ├── SectionNavigation.tsx # Prev/Next buttons
│   └── ProgressIndicator.tsx # Progress bar
├── content/
│   ├── original.md         # Source markdown
│   └── parsed.json         # Parsed content structure
├── lib/
│   ├── types.ts            # TypeScript types
│   └── content.ts          # Content utilities
└── scripts/
    └── parseContent.ts     # Content parser
```

## Customization

### Colors

Edit `app/globals.css` to customize the color palette:

```css
:root {
  --background: #FAF7F2;    /* Warm cream */
  --foreground: #2C2416;    /* Dark brown */
  --accent: #C17B5C;        /* Terracotta */
  --highlight: #A8B89F;     /* Sage green */
  --border: #E8DFD0;        /* Light tan */
}
```

### Typography

Fonts are loaded from Google Fonts in `globals.css`:
- **Headings:** Inter (sans-serif)
- **Body:** Crimson Text (serif)

### Content

To update content:

1. Edit `content/original.md`
2. Run the parser:
   ```bash
   npx tsx scripts/parseContent.ts
   ```
3. Rebuild the site

## Technologies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Markdown** - Markdown rendering
- **Lucide React** - Icons
- **Framer Motion** - Animations (ready to use)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

This project is created for Imagine School's internal use.

## Support

For questions or issues, contact the development team.
