---
title: "Online Library"
publishDate: 2026-05-08
desc: "Built a full-stack library management system using Laravel 12 with two user roles admin and student. Admins manage books, authors, categories, issued books, and users through a dedicated dashboard. Students browse the catalog, track borrowings, and monitor overdue status. Styled with Tailwind CSS v4, DaisyUI v5, and Preline UI v4. Deployed via Docker on Render with a PostgreSQL database hosted on Supabase."
short: "Full-stack library management app with Laravel 12, PostgreSQL, and Docker. Admin panel for managing books and borrowings, student dashboard with loan tracking. Deployed on Render + Supabase."
imageUrl: "../../images/projects/library.jpg"
tags: ["Laravel", "Tailwind CSS", "DaisyUI", "Alpine.js", "PostgreSQL", "Supabase", "Docker", "Render"]
github: "https://github.com/kiarashp/Library-Laravel"
demo: "https://library.kiapmd.dev"
featured: true

---

### Overview

**Online Library** is a full-stack library management system built with Laravel 12.
It supports two user roles — **admin** and **student** — each with a dedicated interface and
distinct capabilities.

### Tech Stack

- **Laravel 12 & PHP 8.2** — MVC backend with Breeze auth scaffolding, Eloquent ORM, and
  queue-based jobs
- **Tailwind CSS v4 & DaisyUI v5** — for the public-facing and authentication pages
- **Preline UI v4 & Alpine.js v3** — for the admin and student dashboard interfaces
- **PostgreSQL via Supabase** — production database with session pooler configuration
- **Docker & Render** — containerised deployment with automated migrations and seeding on
  every release
- **Intervention Image** — automatic WebP conversion and resizing for book, author, and
  profile photos

### Features

- Role-based access control: admin panel and student dashboard with separate layouts and
  middleware
- Admin CRUD for books, authors, categories, issued books, and student accounts
- Student dashboard with live stats — active loans, returned, and overdue — plus a full
  borrowing history
- Overdue detection computed at render time, no stored flag needed
- Book catalog with title and author search, category filtering, and pagination
- Email verification and password reset with graceful SMTP error handling and a demo-mode
  feature flag
- Toast notification system across all four layout shells
- Fully responsive design with dark mode support throughout the admin panel

### Outcome

This project gave me end-to-end experience building a production-ready Laravel application —

from database design and role-based auth to Docker deployment, cloud hosting, and handling
real-world
constraints like SMTP restrictions on cloud platforms.
