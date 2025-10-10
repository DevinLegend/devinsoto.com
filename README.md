# Devin Soto's Blog

A personal blog built with Eleventy, hosted on GitHub Pages.

Last updated: 2025-10-09

## Setup

1. Install dependencies: `npm install`
2. Build locally: `npm run build`
3. Serve locally: `npm run serve`

## Posting

To add a new article:

1. Go to the `posts/` folder in the repo.
2. Click "Add file" > "Create new file".
3. Name it `your-title.md`.
4. Add frontmatter at the top:

```
---
layout: false
title: "Your Article Title"
date: 2025-10-09
excerpt: "Short summary of the article."
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title }} - Devin Soto's Hub</title>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/resources/styles.css">
    <meta name="theme-color" content="#0b261d">
    <meta property="og:title" content="{{ title }} - Devin Soto's Blog">
    <meta property="og:description" content="{{ excerpt }}">
    <meta property="og:url" content="https://www.devinsoto.com{{ page.url }}">
    <meta name="description" content="{{ excerpt }} © Devin Soto.">
</head>
<body>
    <header>
        <div class="header-content">
            <h1>Devin Soto's Hub</h1>
        </div>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/articles.html">Articles</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section class="hero">
            <h2>{{ title }}</h2>
            <p>{{ date | date: "%B %d, %Y" }}</p>
        </section>
        
        <section class="panel">
            <!-- Your article content here in Markdown -->
            # Your Heading

            Your content...

            © 2025 Devin Soto. All rights reserved.
            <div>
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.devinsoto.com{{ page.url }}" target="_blank">Share on LinkedIn</a> |
                <a href="https://x.com/intent/tweet?url=https://www.devinsoto.com{{ page.url }}&text={{ title }}" target="_blank">Share on X</a>
            </div>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2025 Devin Soto. All Rights Reserved.</p>
    </footer>
</body>
</html>
```

5. Write your article below the HTML.
6. Commit the file—GitHub Actions will build and deploy automatically.

## Deployment

Pushed to `main` triggers GitHub Actions to build with Eleventy and deploy to Pages.

Live at: https://devinlegend.github.io/Resume/

© 2025 Devin Soto. All rights reserved.
