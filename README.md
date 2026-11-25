# Bhuvaneshwaran D | Developer Portfolio

A responsive personal portfolio website for **Bhuvaneshwaran D**, a Python backend and AI developer based in Chennai, India. It shows my projects, education and contact details in a clean yellow and navy design.

> Live site: _add your link here once it is deployed_

![Portfolio preview](./screenshots/home.png)

## Features

- **Six pages:** Home, About, Skills, Projects, Education and Contact, with smooth page transitions.
- **Project detail pages:** tap any project card to open its full page with an overview, key features, how it works, tech stack, API endpoints and what I built.
- **Upcoming Projects:** a separate section on the Projects page for work in progress.
- **Education:** degrees with grades and CGPA.
- **Contact page:** contact cards for email, phone and location, plus a message form that opens the visitor's email app, so no backend is needed.
- **Responsive:** works on mobile, tablet and desktop.
- **Accessible:** keyboard friendly, labelled form fields and reduced-motion support.
- **Easy to edit:** all text, projects, skills and links live in one file, `src/data.js`.

## Projects shown on the site

| Project | What it is |
| --- | --- |
| **ContextAPI** | AI-powered API reverse engineering platform using RAG and a three-agent workflow (FastAPI, ChromaDB, PostgreSQL) |
| **Mindfolio** | Investment behavioral analytics system that detects loss aversion, overconfidence and herding (Django, DRF, Pandas) |
| **Alpha Ledger** | Full-stack portfolio analytics platform with React dashboards (Django, DRF, React, PostgreSQL) |
| **elva.ai** _(upcoming)_ | Real-time AI voice assistant |

## Tech stack

- **React 18** for the UI
- **Vite** for development and builds
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Icons** for icons

## Getting started

Requirements: [Node.js](https://nodejs.org/) 18 or newer.

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open the local address shown in the terminal (usually `http://localhost:5173`).

### Other commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Creates the production build in `dist/` |
| `npm run preview` | Previews the production build locally |

## Project structure

```
├── public/
│   ├── photo.png          # Home page photo
│   ├── developer.png      # About page illustration
│   └── resume.pdf         # Resume (optional)
├── src/
│   ├── App.jsx            # Pages, layout and routing
│   ├── data.js            # ALL site content (edit this file)
│   ├── skillIcons.jsx     # Icons for the Skills page
│   ├── index.css          # Global styles
│   └── main.jsx           # App entry point
├── tailwind.config.js