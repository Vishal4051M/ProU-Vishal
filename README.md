# ProU Tech Assessment - Vishal Madineni

Hi! This is my submission for the Frontend, Backend, and Full-stack assessment.

I noticed the requirements asked for three different tracks (Mock Data, API, and Full-stack), but instead of creating three separate disconnected projects, I built one app that handles all of them.

## How it works

I built a single **Full-stack App** that has a switch to turn the backend on or off.

*   **Frontend Track (Mock Data):** You can run the frontend by itself without any backend. It uses a local `mockData.js` file to simulate the API.
*   **Full-stack Track:** You can flip a switch, start the Node.js server, and the exact same frontend will talk to the real SQLite database.

I thought this was a cleaner way to show both skills without duplicating code.

## Project Structure

*   `fullstack-app/`: The React frontend (Vite + Tailwind).
*   `backend-api/`: The Node/Express backend with SQLite.

## Quick Start

### Option 1: Run as Frontend Only (Track 1)
If you just want to see the UI and don't want to set up the server:

1.  Go to `fullstack-app` folder.
2.  Run `npm install` and `npm run dev`.
3.  By default, I set it to use **Mock Data** so it works immediately.
    *   *(Check `src/lib/api.js` if you want to see how I toggle this)*.

### Option 2: Run as Full Stack (Track 3)
To see the real database integration:

1.  **Start the Backend:**
    *   Go to `backend-api` folder.
    *   Run `npm install` then `npm run dev`.
    *   Server runs on port 3000.

2.  **Connect the Frontend:**
    *   Go to `fullstack-app` folder.
    *   Open the `.env` file.
    *   Change `VITE_USE_MOCK=true` to `VITE_USE_MOCK=false`.
    *   Restart the frontend.

Now it's saving to the real `prou.db` file.

## Tech Stack
*   **Frontend:** React, TailwindCSS
*   **Backend:** Node.js, Express
*   **Database:** SQLite (I used this because it's easier to run locally than setting up Mongo/Postgres for a take-home task).

Let me know if you have any questions!
