# Portfolio

A simple React single-page application built with Vite for managing and searching project entries.

## Overview

This app lets users:
- View a list of existing projects
- Add a new project with a title and description
- Search projects by title in real time

The UI is implemented using React components and state hooks.

## Features

- Add a new project via form submission
- Search and filter project list instantly
- Display project title and description
- Built with React 19 and Vite

## Project Structure

- `src/App.jsx` — main app and state management
- `src/Components/AddProjectForm.jsx` — form for adding new projects
- `src/Components/SearchForm.jsx` — search input and filtered list
- `src/Components/ProjectItem.jsx` — single project display

## Getting Started

### Prerequisites

- Node.js 18+ or compatible version
- npm

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL provided by Vite to view the app.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Notes

- The app stores data in React state only, so all added projects are reset after a page refresh.
- Search is case-insensitive and filters by project title.

## License

This project is provided as-is for learning and demonstration purposes.