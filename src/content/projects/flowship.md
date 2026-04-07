---
title: "Delivery Management API"
publishDate: 2026-04-07
desc: "I built a production-style backend API for a delivery management system using FastAPI. The project covers authentication, database design, background processing, and real-world backend architecture. It includes RESTful endpoints, JWT-based auth, PostgreSQL integration, and deployment on Vercel with Redis (Upstash)."
short: "A production-style FastAPI backend for a delivery system with JWT auth, PostgreSQL, Redis (Upstash), and Vercel deployment."
imageUrl: "../../images/projects/flowship.jpg"
tags: ["FastAPI", "Python", "PostgreSQL", "SQLModel", "Docker", "Redis", "Backend", "REST API"]
github: ""
demo: "https://flowship.kiapmd.dev/"
featured: true
---

### Overview

This project is a **backend API for a delivery management system**, designed to simulate real-world logistics workflows.  
It handles users, shipments, authentication, and background processes, following modern backend best practices.

The focus was on building a scalable and structured API using FastAPI, with clean architecture and production-oriented patterns.

### Tech Stack

- **FastAPI** — high-performance Python framework for building APIs  
- **SQLModel & PostgreSQL** — for relational database design and data persistence  
- **JWT & OAuth2** — for secure authentication and authorization  
- **Redis (Upstash)** — for caching and background task support  
- **Docker & Docker Compose** — for containerization and local development  
- **Vercel** — for deployment and hosting  

### Features

- RESTful API with structured endpoints for users, shipments, and operations  
- Secure authentication system (JWT, login, signup, protected routes)  
- Relational database with One-to-Many and Many-to-Many relationships  
- Background task handling (initially with Celery, later simplified)  
- Email/SMS-style notification logic for shipment updates  
- API testing using pytest and test client  
- Modular architecture with dependency injection  

### Outcome