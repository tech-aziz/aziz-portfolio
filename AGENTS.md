<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Architecture & Coding Rules

## 1. Separation of Concerns & State Management
*   **Static/Dummy Data**: All static data, mock structures, list arrays, capability details, and other placeholder text assets MUST be extracted from React components. Place them in the `dummy-data/` directory in a modular and organized format (e.g., `heroData.ts`, `projectsData.ts`).
*   **Zustand State Stores**: Create dedicated state stores within the `store/` directory to manage UI states (such as active filters, scroll triggers, modal visibility, typing states, and form inputs) and any associated logic/callbacks.
*   **Clean Components**: React components must not contain hardcoded lists or state transitions directly. Instead, call the Zustand hooks to read states or execute action functions. Never define dummy data or core state management functions inside the components.

