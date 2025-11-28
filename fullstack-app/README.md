# Track 3: Fullstack (Integrated) - Employee Task Tracker

This is the solution for Track 3 of the Internship Coding Challenge. It is a full-stack application that integrates the Frontend (React) with the Backend API (Node.js/Express) and Database (SQLite).

## Architecture
The application follows a client-server architecture:
*   **Frontend**: React application (Vite) that consumes the REST API.
*   **Backend**: Express.js API that handles business logic and database operations.
*   **Database**: SQLite database storing persistent data.

## Features
*   **Real-time Data**: Fetches live data from the backend API.
*   **Task Management**: Create, update, and delete tasks with changes persisted to the database.
*   **Dashboard**: Live statistics based on database records.
*   **Team View**: View all employees fetched from the database.
*   **Responsive UI**: Modern, responsive design using Tailwind CSS.

## Tech Stack
*   **Frontend**: React, Tailwind CSS, Headless UI, Framer Motion
*   **Backend**: Node.js, Express, Better-SQLite3
*   **Tools**: Vite, Concurrently (for running both in dev)

## Setup Instructions

### Prerequisites
*   Node.js installed.

### Running the App
1.  **Start the Backend**:
    *   Open a terminal.
    *   `cd backend-api`
    *   `npm install` (if not already done)
    *   `npm run dev`
    *   Server runs at `http://localhost:3000`

2.  **Start the Frontend**:
    *   Open a new terminal.
    *   `cd fullstack-app`
    *   `npm install` (if not already done)
    *   `npm run dev`
    *   App runs at `http://localhost:5173`

## Configuration
*   The frontend expects the backend to be running at `http://localhost:3000`.
*   This is configured in `fullstack-app/.env`: `VITE_API_URL=http://localhost:3000/api`

## Assumptions
*   Both frontend and backend are running locally.
*   The database is initialized automatically by the backend on startup.
