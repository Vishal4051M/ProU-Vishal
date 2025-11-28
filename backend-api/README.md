# Track 2: Backend (API + Database) - Task Management API

This is the solution for Track 2 of the Internship Coding Challenge. It is a RESTful API built with Node.js and Express for managing Employees and Tasks.

## Features
*   **CRUD Operations**: Full Create, Read, Update, Delete support for Tasks.
*   **Employee Management**: List and create employees.
*   **Filtering**: Filter tasks by status or assignee.
*   **Validation**: Request payload validation using Joi.
*   **Database**: SQLite database for persistent storage.
*   **Logging**: HTTP request logging with Morgan.

## Tech Stack
*   **Runtime**: Node.js
*   **Framework**: Express.js
*   **Database**: Better-SQLite3
*   **Validation**: Joi
*   **Logging**: Morgan
*   **Testing**: Jest + Supertest

## Setup Instructions
1.  Navigate to the directory:
    ```bash
    cd backend-api
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the server:
    ```bash
    npm run dev
    ```
4.  The API will be available at `http://localhost:3000`.

## API Endpoints

### Employees
*   `GET /api/employees`: List all employees.
*   `POST /api/employees`: Create a new employee.
    *   Body: `{ "name": "John Doe", "email": "john@example.com", "role": "Developer" }`

### Tasks
*   `GET /api/tasks`: List all tasks.
    *   Query Params: `?status=TODO`, `?assignee_id=1`
*   `POST /api/tasks`: Create a new task.
    *   Body: `{ "title": "Fix Bug", "assignee_id": 1, "status": "TODO" }`
*   `PATCH /api/tasks/:id`: Update a task.
*   `DELETE /api/tasks/:id`: Delete a task.

## Database Schema
*   **Employees**: `id` (INTEGER PK), `name` (TEXT), `email` (TEXT), `role` (TEXT), `avatar` (TEXT), `created_at` (DATETIME)
*   **Tasks**: `id` (INTEGER PK), `title` (TEXT), `description` (TEXT), `status` (TEXT), `assignee_id` (INTEGER FK), `due_date` (DATETIME), `created_at` (DATETIME)

## Assumptions
*   SQLite is used as the database for simplicity and portability.
*   The server runs on port 3000 by default.
