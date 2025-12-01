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

## Deployment

This site is deployed on GitHub Pages. The repository is configured to automatically deploy from the `main` branch.

## Technologies

- HTML5 / CSS3
- Vanilla JavaScript
- Model Viewer (for 3D models)
- Lightbox.js (for image galleries)

