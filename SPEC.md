---
status: draft
owners:
  - Brad Frost
  - Ian Frost
last_updated: 2026-10-20
amendments: []
---

# SPEC.md — atomic-design-course-demo (Level 7)

> **The project spec: what this project is and what it's for.**
>
> **This is not a work order.** It describes the project, not the branch you're on. Work is specified in `FEATURE-SPEC.md` (AGENTS.md §4.1–§4.3). If you're writing about a change you're making right now, you're in the wrong file.
>
> **It is never deleted.** It survives every merge and outlives every feature branch. When what the project *is* changes, amend it — add an entry to `amendments` with the date, author, and a summary — rather than rewriting history.
>
> `status: approved` here means "this accurately describes the project." It does **not** authorise any particular piece of work; only an approved `FEATURE-SPEC.md` does that (§4.2).

## 1. What this project is

This is the hands-on demo codebase for the [Atomic Design Certification Course](https://atomicdesigncourse.com/). The `level-7` branch is the final level. It is a working design system for a fictional company, "Our Company," and it has three parts: a themeable design-token package, a library of 16 Lit web components, and a Storybook workshop. Four applications consume the system: the original static app, an Eleventy site, a React app, and a vanilla PHP app. Both packages are published to npm as `@brad-frost-web/atomic-design-course-demo-design-tokens` and `@brad-frost-web/atomic-design-course-demo-web-components`.

## 2. Why it exists

Students learn atomic design by watching one codebase grow from static HTML into a documented, distributed design system. They then clone and run each stage themselves. Level 7 is the payoff: proof that one system can serve very different tech stacks. If it fails to install, build, or behave accessibly, it teaches the opposite of what the course claims. So "runs from a clean clone" and "models good practice" are product requirements here, not polish.

## 3. Who it's for

- **Course students:** designers and front-end developers of mixed git and Node experience. They clone the repo, check out `level-7`, follow the README, and read the code as a reference implementation.
- **Course instructors:** Brad Frost and the course team. They demo from it live (workshops, recordings) and point students at it.
- **Agents assisting either group:** they read this repo to explain or extend the system, so its context needs to be machine-legible (see #12).

## 4. Goals

- A fresh clone of `level-7` installs, builds, and runs Storybook and all four apps by following the README alone.
- The components model good practice: semantic, accessible (WCAG 2.1 AA), token-driven, and themeable across all three themes.
- Design tokens are the single source of styling. They are tiered (definitions → usage → components) and kept in parity with the Figma "Our Company Design Tokens Library."
- Each consuming app shows a distinct, realistic integration path (static/Vite, Eleventy passthrough, React + Vite, PHP with no build) using the same published packages.
- The code stays small and readable enough to teach from. Clarity beats cleverness.

## 5. Non-goals

- Being a production design system for a real product. Component coverage is scoped to a 4-page marketing site, not a product UI kit.
- Using Eddie. This repo demonstrates *building* a design system, so it has its own (see `CLAUDE.md` project deltas).
- Matching earlier levels. Levels 1–6 are frozen teaching snapshots on their own branches, and they are not governed by this spec or by bfw-process.
- Framework-specific component wrappers (React/Vue bindings). The point is that plain web components work everywhere.

## 6. Shape and constraints

- **Project type:** `app` (AGENTS.md §6). It's a browsable UI with a component library at its core.
- **Structure:** an npm-workspaces monorepo with six workspaces: `our-company-design-tokens`, `our-company-web-components`, `our-company-app`, `our-company-app-eleventy`, `our-company-app-react`, `our-company-app-php`.
- **Stack deviations from §3 defaults, all deliberate for the curriculum:**
  - Lit 3 web components with shadow DOM
  - Style Dictionary 5 for tokens, with a custom `--oc-*` CSS format
  - Storybook 10 (web-components-vite) for docs and tests
  - Vite for bundling
  - No Eddie, no Nuxt
- **Build order matters:** tokens, then the component bundle (`dist/`), then Storybook. The PHP app copies the built assets into `public/vendor/`.
- **Themes:** `vanilla`, `our-company` (default), and `wowee-zowee`. `wowee-zowee` is deliberately loud, but it still has to meet contrast.
- **Branch model:** `level-7` is the integration branch for this spec. See `CLAUDE.md`.

## 7. Deployment model

- **Storybook** builds via `npm run build` and deploys to Netlify at `https://level-7--atomic-design-course-demo.netlify.app/`. `netlify.toml` publishes `our-company-web-components/storybook-static`.
- **npm packages** are published manually via `npm run publish` (tokens, then components). The current version for both is 1.0.0.
- **Apps** run locally only (`npm run start-app`, `start:eleventy`, `start:react`, `start:php`).
- There is no persistent state, backend, or user data.

## 8. Canonical sources of truth

| Parameter | Lives in | Owned by |
|---|---|---|
| Token values and names (code) | `our-company-design-tokens/{theme}/tier-*/` JSON | this repo |
| Token values and names (design) | Figma "Our Company Design Tokens Library" (8 variable collections, 3 modes) | course design team; kept at parity with the JSON by hand (#18) |
| Component designs | Figma component library used by the "Level 6 – Consuming App" file. Level 7 has no Figma file yet (#13). | course design team |
| Published packages | npm `@brad-frost-web/atomic-design-course-demo-*` | this repo, via `npm run publish` |
| Course narrative and level index | `main` branch README, and atomicdesigncourse.com | course team |
| Build process rules | `@brad-frost-web/bfw-process` (pinned devDependency) + `CLAUDE.md` deltas | bfw-process upstream / this repo |

## 9. Accessibility posture

WCAG 2.1 AA is the baseline, and because this is teaching material it is also the lesson. The 2026-10-20 design system inspection (#20) found these known gaps on `level-7`, each tracked:

- `my-hero` and `my-page-header` render `<h2>`, so no page has an `<h1>` (#8).
- Field labels aren't associated with their inputs, and forms don't submit (#9).
- Some token pairs fail contrast across themes (#10).
- The button has no designed focus state, and inputs rely on a border-color change only (#8, #9).
- The Storybook a11y addon runs in `todo` mode, not `error`, and there is no CI yet (#7).

Assistive-tech target is the same as the course's audience: current Chrome, Safari, and Firefox, plus VoiceOver and NVDA.

## 10. Open questions

- Should the ship gate (`hardGates.shipReadiness`) be turned on for a teaching repo once the five `bfw:verify:*` scripts exist, or should `level-7` stay gate-off with CI tests only? (See #22.)
- Should fixes on `level-7` be backported to levels 5–6, which students also run, or should those stay frozen? (See #8.)
- Should Level 7 get its own Figma file, or keep pointing at Level 6's? (See #13.)
