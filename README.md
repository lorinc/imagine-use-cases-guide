# AI Use Case Evaluation Guide

A practical framework for evaluating AI tools in educational settings.

## Overview

This is a static Next.js site that presents a comprehensive guide for school administrators to evaluate AI use cases. The guide covers everything from understanding how AI works with data to implementing specific solutions.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Updating Content

1. Edit `content/original.md`
2. Run the parser: `npm run parse`
3. Rebuild: `npm run build`

## Tech Stack

- Next.js 16 (App Router, Static Export)
- TypeScript
- Tailwind CSS
- Markdown parsing with Remark/Rehype

## Deployment

The site is configured for static export and can be deployed to any static hosting service. A GitHub Actions workflow is included for automated deployment to GitHub Pages.
