# ProU Technology Assessment Submission

This repository contains the submission for the **Frontend, Backend, and Full-stack Development** assessment.

## 🚀 One Project, All Tracks
To demonstrate proficiency in all areas and ensure a cohesive codebase, I have implemented a **Unified Architecture**. Instead of three separate disconnected projects, this solution contains:

1.  **`backend-api`**: A robust Node.js/Express REST API with SQLite database (Satisfies **Track 2**).
2.  **`fullstack-app`**: A modern React application that can operate in two modes (Satisfies **Track 1 & 3**).

### 🌟 How it Works

The `fullstack-app` has a smart toggle to switch between **Mock Data** (Track 1) and **Real API** (Track 3).

#### Track 1: Frontend (Mock Data)
To run the frontend in standalone mode (no backend required):
1.  Navigate to `fullstack-app`.
2.  Edit `.env` and set `VITE_USE_MOCK=true`.
3.  Run `npm run dev`.
4.  The app will use local mock data for all operations.

#### Track 3: Full-stack (Integrated)
To run the full integrated application:
1.  **Start the Backend**:
    *   Navigate to `backend-api`.
    *   Run `npm install` (if first time).
    *   Run `npm run dev`.
    *   Server starts at `http://localhost:3000`.
2.  **Start the Frontend**:
    *   Navigate to `fullstack-app`.
    *   Edit `.env` and set `VITE_USE_MOCK=false`.
    *   Run `npm run dev`.
3.  The app will now persist data to the SQLite database via the API.

## 🛠 Tech Stack

*   **Frontend**: React, Vite, TailwindCSS, Heroicons
*   **Backend**: Node.js, Express, SQLite (better than mock JSON for real persistence)
*   **Tools**: Concurrently (optional), Axios/Fetch

## 📂 Structure

*   `/backend-api`: API Source code, Database migrations, Models.
*   `/fullstack-app`: Frontend Source code, Components, Mock Data Logic.

## ✅ Bonus Features
*   **Unified Codebase**: Seamlessly handles both mock and real data.
*   **Responsive Design**: Fully responsive UI with TailwindCSS.
*   **Real Database**: SQLite used instead of simple in-memory arrays for the backend track.
