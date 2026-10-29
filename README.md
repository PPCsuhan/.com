# Ahmad Shibli — Google Ads Specialist & Analytics Portfolio

A professional, high-performance, conversion-focused portfolio website for **Ahmad Shibli**, Google Ads Specialist and Analytics Specialist. Built with React, TypeScript, Tailwind CSS, and Node.js/Express.

---

## Why the White Page Happened & How It Is Fixed

### The Problem (From Your Screenshots):
1. Your GitHub repository (`PPCsuhan/ads`) contained only **raw source code** (`src/`, `package.json`, `vite.config.ts`, etc.).
2. GitHub Pages cannot run or compile TypeScript/JSX React source files directly in the browser. When visiting `ppcsuhan.github.io/ads/`, the browser couldn't find compiled HTML/JS bundles, resulting in a **White Blank Page**.
3. In your GitHub Pages settings (`Settings -> Pages`), the source was set to **GitHub Actions**, but there was no deployment workflow file in the repository.

### The Solution:
We have added an official **GitHub Actions Workflow** file at `.github/workflows/deploy.yml`. 

Now, whenever you push code to GitHub:
1. GitHub Actions will automatically trigger.
2. It will install dependencies and run `npm run build`.
3. It will automatically publish the compiled production build (`dist/`) to GitHub Pages.

---

## What You Need To Do Now:

1. **Commit and Push** the new `.github/workflows/deploy.yml` file and `.nojekyll` to your GitHub repository (`PPCsuhan/ads`).
2. Go to your GitHub repository -> **Settings** -> **Pages**.
3. Under **Build and deployment**, ensure **Source** is set to **GitHub Actions**.
4. Within 1–2 minutes, check the **Actions** tab in your repository to watch the deployment complete successfully. 
5. Visit `https://ppcsuhan.github.io/ads/` — your professional portfolio website will now load perfectly!
