# Yifan Zhao Portfolio

Personal portfolio website showcasing industrial design, film, and interactive projects.

## Structure

- `index.html` - Main homepage
- `about.html` - About page
- `archive.html` - Personal archive and interests
- `project-*.html` - Individual project detail pages
- `style-technical.css` - Main stylesheet
- `script.js` - Main JavaScript
- `projects-data.js` - Project data configuration

## Projects

- Modular Sneakers
- Miniature Panton Chair
- Shared Heater
- Medieval Gauntlet
- Gaze
- Hull Model
- Mechanism Study
- 1wend1 (Short Film)
- Self Portrait (Motion Graphics)
- DND Campaign Engine
- Barrier-Free Mouse Design

## Local Development

To run locally, use a local HTTP server (required for 3D models due to CORS):

```bash
# Python 3
python -m http.server 8000

# Or use the provided script
start-server.bat
```

Then visit: `http://localhost:8000`

## Deployment (GitHub Pages)

- **Repository:** [gumayusiiiii/YifanStudio](https://github.com/gumayusiiiii/YifanStudio)
- **Live site:** after Pages is enabled, the homepage is the portfolio grid at **`index.html`** →  
  `https://gumayusiiiii.github.io/YifanStudio/`
- Push to **`master`** (or **`main`**): GitHub Actions workflow `.github/workflows/deploy-github-pages.yml` deploys the repo root as static hosting.
- In the repo: **Settings → Pages → Build and deployment → Source:** select **GitHub Actions** (not “Deploy from branch”) if you use the workflow above.

See `GITHUB_DEPLOYMENT.md` for step-by-step setup in Chinese.

## Technologies

- HTML5 / CSS3
- Vanilla JavaScript
- Model Viewer (for 3D models)
- Lightbox.js (for image galleries)


