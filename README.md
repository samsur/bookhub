# BookHub - Angular Learning Application

A simple Angular application demonstrating front-end to back-end integration for educational purposes.

## Features

- Book recommendation search using AI
- Clean, responsive UI with Angular Material
- Routing between Home and Team pages
- Standalone components
- Service-based architecture

## Project Structure

```
src/app/
├── home/                    # Home page component (search & display books)
├── team/                    # Team page component
├── models/                  # TypeScript interfaces
│   └── book.interface.ts   # Book model
├── services/               # API services
│   └── book.service.ts    # Book recommendation service
├── app.component.*        # Root component with toolbar
├── app.routes.ts          # Route configuration
└── app.config.ts          # App configuration
```

## Prerequisites

- Node.js and npm installed
- Backend API running on `http://localhost:8000`

## Installation

```bash
npm install
```

## Running the Application

1. Make sure your backend API is running on `http://localhost:8000`

2. Start the development server:

```bash
npm start
```

3. Navigate to `http://localhost:4200/` in your browser

## API Endpoint

The application connects to:
- **POST** `http://localhost:8000/api/generate`
- **Request Body**: `{ "prompt": "your book preferences" }`
- **Response**: Array of book recommendations

## Pages

### Home (/)
- Search form for book preferences
- Grid display of recommended books
- Responsive card layout

### Team (/team)
- Team member profiles
- Avatar and role display

## Technologies Used

- Angular 19
- Angular Material
- Standalone Components
- RxJS
- TypeScript

## Learning Objectives

This application demonstrates:
1. Creating standalone Angular components
2. Service injection and HTTP requests
3. Angular routing
4. Angular Material components (toolbar, cards, forms)
5. Responsive design with CSS Grid
6. TypeScript interfaces
7. Observable handling
