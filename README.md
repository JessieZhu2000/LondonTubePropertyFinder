# London Tube Map - Interactive Line Filter

A modern, accessible static web application for exploring the London Underground and DLR network with interactive line filtering.

## Features

- Interactive Google Maps-based visualization
- Filter by individual or multiple tube/DLR lines
- Accessible keyboard navigation
- Mobile-responsive design
- Static site generation for fast loading

## Getting Started

### Prerequisites

- Node.js 20+ and npm 10+
- Google Maps JavaScript API key

### Installation

```bash
npm install
```

### Environment Setup

Create a `.env.local` file (see `.env.example` for the authoritative list):

```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-browser-key
TFL_APP_ID=your-tfl-app-id (optional)
TFL_APP_KEY=your-tfl-app-key (optional)
```

Only variables prefixed with `NEXT_PUBLIC_` are exposed to the client. Keep any secret (if added later) unprefixed and server-only.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Building for Production

```bash
npm run build    # builds static export (output: 'export') respecting optional NEXT_PUBLIC_BASE_PATH
npm run start:static  # serves exported static site locally
```

If deploying to GitHub Pages under a project site (URL includes the repository name), set:

```
NEXT_PUBLIC_BASE_PATH=/YourRepositoryName
```

Root user/org Pages repositories named <username>.github.io do NOT need a base path.

### Testing

```bash
# Unit tests
npm test

# E2E tests
npm run test:e2e

# Accessibility audit
npm run audit:accessibility
```

### Data Refresh & Validation

```bash
npm run data:validate   # schema + integrity checks
npm run data:refresh    # fetch + transform latest TfL data
```

The build pipeline runs `data:validate` automatically before `data:refresh`.

## Project Structure

- `app/` - Next.js App Router pages and components
- `public/data/` - Static GeoJSON data files
- `scripts/` - Data fetching and transformation scripts
- `tests/` - E2E and accessibility tests

## License

MIT
