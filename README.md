# Chipter

A chip review website. Serious design. Silly subject matter.

## Tech Stack

- **Web**: Next.js 16, React 19, Tailwind CSS v4
- **CMS**: Sanity Studio
- **Package Manager**: pnpm (monorepo)

## Project Structure

```
chipter/
├── apps/
│   ├── web/        # Next.js frontend
│   └── studio/     # Sanity Studio CMS
├── package.json    # Root scripts
└── pnpm-workspace.yaml
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
pnpm install
```

### Environment Variables

Copy the example env file and fill in your values:

```bash
cp .env.example apps/web/.env.local
```

Required variables:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset name |
| `RESEND_API_KEY` | Resend API key for emails |

### Development

```bash
# Start the Next.js app (http://localhost:3000)
pnpm dev

# Start Sanity Studio (http://localhost:3333)
pnpm dev:studio

# Run both simultaneously in separate terminals
```

### Build

```bash
# Build the web app
pnpm build

# Build Sanity Studio
pnpm build:studio
```

### Deploy

```bash
# Deploy Sanity Studio
pnpm deploy:studio
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start Next.js dev server |
| `pnpm dev:studio` | Start Sanity Studio dev server |
| `pnpm build` | Build Next.js for production |
| `pnpm build:studio` | Build Sanity Studio |
| `pnpm start` | Start production Next.js server |
| `pnpm lint` | Run ESLint on web app |
| `pnpm deploy:studio` | Deploy Sanity Studio |
