# Track 1: Frontend (Mock Data) - Employee Task Tracker

This is the solution for Track 1 of the Internship Coding Challenge. It is a standalone React application that manages employee tasks using mock data and local storage persistence.

## Features
*   **Dashboard**: View key metrics like total tasks, completion rate, and active tasks.
*   **Task List**: View all tasks with details (Title, Status, Assignee).
*   **Filtering**: Filter tasks by status (TODO, IN_PROGRESS, DONE).
*   **Add Task**: Create new tasks and assign them to employees.
*   **Persistence**: Data is saved to `localStorage`, so it persists across page reloads (Bonus Challenge).
*   **Responsive Design**: Fully responsive UI using Tailwind CSS.

## Tech Stack
*   **Framework**: React (Vite)
*   **Styling**: Tailwind CSS, Headless UI
*   **Icons**: Heroicons
*   **Animations**: Framer Motion
*   **State Management**: React Hooks + LocalStorage

## Setup Instructions
1.  Navigate to the directory:
    ```bash
    cd frontend-mock
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
4.  Open your browser at `http://localhost:5173` (or the port shown in the terminal).

## Assumptions
*   The initial mock data is loaded from `src/mock-data.json`.
*   If `localStorage` is empty, it initializes with the mock data.
*   Employee data is read-only for this track (hardcoded/mocked).
