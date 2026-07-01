# Sports Firmeza Backend

Express + TypeScript REST API.

## Requirements

- Node.js >= 20
- npm

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Create your env file
cp .env.example .env

# 3. Run in development (auto-reload)
npm run dev
```

The server starts on `http://localhost:3000` by default.

## Scripts

| Script              | Description                                  |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start with hot reload (ts-node-dev)          |
| `npm run build`     | Compile TypeScript to `dist/`                |
| `npm start`         | Run the compiled build                       |
| `npm run typecheck` | Type-check without emitting                  |
| `npm run lint`      | Lint the codebase                            |
| `npm run lint:fix`  | Lint and auto-fix                            |
| `npm run format`    | Format with Prettier                         |

## Project structure

```
src/
├── config/         # Environment & app configuration
├── controllers/    # Request handlers (business logic entry points)
├── middlewares/    # Express middleware (errors, async, 404)
├── routes/         # Route definitions
├── utils/          # Shared helpers (logger, ApiError)
├── app.ts          # Express app factory
└── index.ts        # Server bootstrap + graceful shutdown
```

## API

Base path: `/api/v1`

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | `/`                 | Service info       |
| GET    | `/api/v1/health`    | Health check       |

## Adding a new feature

1. Create a controller in `src/controllers/`.
2. Create a router in `src/routes/` and wire it up in `src/routes/index.ts`.
3. Throw `ApiError` (see `src/utils/ApiError.ts`) for HTTP errors; wrap async
   handlers with `asyncHandler` from `src/middlewares/asyncHandler.ts`.
# sports_firmeza_backend
