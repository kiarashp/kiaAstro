---
title: "Meridian Instruments Corp — Corporate Site & Product Configurator"
publishDate: 2026-07-30
desc: "A full-stack product spanning a SvelteKit (SSR) frontend and a NestJS 11 backend API for a precision-instruments manufacturer. The site combines a public marketing site, blog, and filterable product catalog with a 'build-your-own' ordering-code configurator, where visitors assemble a custom product spec and submit it as a quote request answered through a built-in messaging thread — all backed by a role-based CMS (admin/author/editor/user) for managing posts, products, product types, and users. Auth runs on short-lived JWTs in HttpOnly cookies with automatic refresh and optional Google OAuth, and the frontend consumes a fully typed client generated from the backend's OpenAPI schema, so contract changes on either side surface as compile-time errors instead of runtime bugs."
short: "Full-stack SvelteKit + NestJS platform for a precision-instruments manufacturer, with a rules-driven product configurator, quote-request messaging, and a role-based CMS."
imageUrl: "../../images/projects/meridian.jpg"
tags: ["SvelteKit", "NestJS", "TypeScript", "PostgreSQL", "TypeORM", "OpenAPI", "Playwright"]
github: "https://github.com/kiarashp/Backend-Nest-Corporate"
demo: "https://meridian.kiapmd.dev/"
featured: true
---

### Overview

**Meridian Instruments Corp** is a full-stack corporate website and admin CMS for a precision-instruments manufacturer, built as a SvelteKit (SSR) frontend backed by a NestJS 11 REST API. It combines a public marketing site, blog, and filterable product catalog with a "build-your-own" configurator flow, where visitors assemble a custom product spec and submit it as a quote request that staff answer through a built-in messaging thread — all developed largely through AI-agent pair-programming with Claude Code.

### Tech Stack

- **SvelteKit (SSR)** — customer-facing site and admin CMS, deployed on Vercel with environment-driven white-label branding
- **NestJS 11 & TypeScript** — modular REST API (users, auth, posts, products, configurator, contact, admin, audit-log, uploads, mail), layered controller → service → provider architecture, deployed on Render with graceful shutdown and prestart TypeORM migrations
- **PostgreSQL via TypeORM** — primary datastore hosted on Aiven, with JSONB facets for per-product-type specs
- **OpenAPI / openapi-typescript / openapi-fetch** — hand-annotated Swagger schema compiled into a typed contract shared end-to-end without a monorepo
- **JWT auth** — short-lived access/refresh tokens in HttpOnly cookies with automatic server-side refresh, optional Google OAuth via google-auth-library
- **Playwright** — full end-to-end coverage of auth, role permissions, and CMS workflows against a real running backend

### Features

- Rules-driven "ordering-code configurator" engine: reusable, conditionally-dependent segment definitions, an in-database constraint system, and a single-pass resolver that validates customer selections into a final ordering code
- Support-ticket-style quote-request system with saved configuration snapshots and two-way threaded messaging between customer and admin, plus transactional email notifications
- Role-based CMS (USER/EDITOR/AUTHOR/ADMIN via a custom AuthenticationGuard/RolesGuard pair) for posts, products, product types, and users
- Blog/CMS module with drafts, review, publish workflow, tag filtering, related-content queries, and sanitized Markdown-to-HTML rendering
- Global request pipeline: per-IP rate limiting, consistent `{ apiVersion, data }` response envelope, and class-transformer field-level serialization per audience
- Swappable file-storage abstraction (local disk or Cloudinary) and full write-operation audit-log trail
- Hand-built, nested CSS design-token system driving light/dark theming, including a self-hosted variable font and an internal style guide

### Outcome

The project delivers a production-grade, type-safe platform end-to-end — from a custom rules engine for product configuration to a fully tested, white-labelable CMS — demonstrating practical expertise in NestJS backend architecture, SvelteKit SSR, contract-first API design, and AI-agent-assisted full-stack development.
