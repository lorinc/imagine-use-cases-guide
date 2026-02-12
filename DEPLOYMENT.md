# Deployment Guide

## Quick Start - Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `imagine-proposal` or `ai-guide`
3. Keep it public or private (your choice)
4. Don't initialize with README (we already have one)

### Step 2: Push Your Code

From the `proposal-site` directory:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: AI Guide for Imagine School"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** in the left sidebar
4. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
5. That's it! The site will automatically deploy

### Step 4: Configure Base Path (if needed)

**Only if deploying to `username.github.io/repo-name`:**

Edit `next.config.ts` and uncomment/set the basePath:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/your-repo-name', // Add this line
};
```

Then commit and push:

```bash
git add next.config.ts
git commit -m "Configure base path for GitHub Pages"
git push
```

### Step 5: Access Your Site

After a few minutes, your site will be available at:
- **With custom domain:** `username.github.io` (if repo is named `username.github.io`)
- **With subdirectory:** `username.github.io/repo-name`

## Updating Content

To update the content:

1. Edit `content/original.md`
2. Run the parser:
   ```bash
   npm run parse
   ```
   Or manually:
   ```bash
   npx tsx scripts/parseContent.ts
   ```
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```

The site will automatically rebuild and redeploy!

## Local Development

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npx serve out
```

## Troubleshooting

### Build fails on GitHub Actions

1. Check the Actions tab in your GitHub repository
2. Look at the error logs
3. Common issues:
   - Missing dependencies: Run `npm install` locally and commit `package-lock.json`
   - TypeScript errors: Run `npm run build` locally to catch them first

### Site shows 404 errors

- Make sure you've set the correct `basePath` in `next.config.ts`
- Wait a few minutes for GitHub Pages to update
- Clear your browser cache

### Styles not loading

- Check that the `basePath` matches your repository name
- Verify the deployment completed successfully in GitHub Actions

## Custom Domain (Optional)

To use a custom domain like `guide.imagineschool.com`:

1. Add a `CNAME` file to the `public` directory with your domain
2. In GitHub repository settings → Pages → Custom domain, enter your domain
3. Configure DNS with your domain provider:
   - Add a CNAME record pointing to `username.github.io`

## Support

For issues or questions, check:
- [Next.js Documentation](https://nextjs.org/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
