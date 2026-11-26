# PulseFlow

PulseFlow is a responsive Next.js project-planning workspace. The current committed version is an MVP: projects and tasks are stored in browser localStorage, and the AI planner uses a server-side OpenAI API route when configured. The included Supabase SQL is a starting schema only; authentication and cloud CRUD/synchronization are not yet wired into the UI. Do not use this build as a production multi-user system until those parts are completed and tested.

## Stack
- Next.js 15 App Router, React 19, TypeScript
- OpenAI API called server-side only
- Optional Supabase schema (migration under supabase/migrations)
- Vercel deployment

## Local development
1. Install Node.js 20.9+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Add `OPENAI_API_KEY` if you want AI planning; the dashboard works without it.
5. Run `npm run dev` and open http://localhost:3000.
6. Before deployment, run `npm run typecheck`, `npm run lint`, and `npm run build`.

## Deploy to Vercel
1. Import this GitHub repository into Vercel.
2. Framework preset: Next.js; build command: `npm run build`; output directory: leave default.
3. Add `OPENAI_API_KEY` and optionally `OPENAI_MODEL` in Project Settings → Environment Variables. Never put secret keys in NEXT_PUBLIC variables.
4. Deploy. Vercel creates a public HTTPS URL and deploys future pushes to the connected branch automatically.
5. Check `/api/health` after deployment.

## Supabase status
The SQL migration is a schema starter with row-level security. Apply it only to a new/test Supabase project after review. The current browser dashboard does not yet use Supabase Auth or cloud persistence, so data does not sync between devices yet.

## Android
The Android wrapper workflow is separate and requires a deployed HTTPS URL. A wrapper APK does not replace the hosted Next.js server.
