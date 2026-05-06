# Wanderlust

Wanderlust is a modern travel discovery experience built with Next.js. It presents curated destinations, mood-based inspiration, itinerary ideas, and travel intelligence in a polished landing-page style interface.

## Overview

The project is organized as a multi-page travel app with a marketing homepage, destination browsing, destination detail views, experiences, and supporting utility pages. The homepage combines editorial storytelling with calls to action, testimonials, and live travel prompts to help users explore where to go next.

## Features

- Curated destination discovery
- Mood-based travel search and inspiration
- Featured travel services and itinerary prompts
- Destination detail and experiences pages
- Sign-in, contact, privacy, and terms routes
- SEO support with `robots.txt` and `sitemap.xml`
- API routes for authentication and travel intelligence

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Recharts

## Project Structure

- `src/app/page.tsx` - homepage composition
- `src/app/components/` - landing page sections
- `src/app/destinations/` - destinations listing flow
- `src/app/destination-detail/` - destination detail route
- `src/app/experiences/` - experiences browsing pages
- `src/components/` - shared header, footer, and UI primitives
- `src/data/` - destination and experience data
- `src/styles/` - global styles and Tailwind entry points

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The development server runs on port `4028`.

### Build for production

```bash
npm run build
```

### Start the production server

```bash
npm run start
```

### Quality checks

```bash
npm run type-check
npm run lint
```

### Formatting

```bash
npm run format
```

## Scripts

- `npm run dev` - start the local development server
- `npm run build` - create a production build
- `npm run start` - run the production build locally
- `npm run lint` - run Next.js linting
- `npm run lint:fix` - auto-fix lint issues
- `npm run type-check` - run TypeScript validation
- `npm run format` - format source files with Prettier

## Deployment

The app is ready for deployment on platforms that support Next.js, including Vercel and Netlify. Ensure the required environment variables are set before deploying.

## Environment Variables

If you deploy this app, set `NEXT_PUBLIC_SITE_URL` to the public site URL so metadata and SEO routes use the correct origin.

## Repository Notes

- The codebase is still partially scaffolded in places, so some sections may require implementation work.
- The current README is designed to act as a concise project landing page for contributors and reviewers.
