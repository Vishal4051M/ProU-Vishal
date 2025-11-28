import db from './index.js';

export const init = (database = db) => {
  console.log('Initializing database...');

  // Drop existing tables
  database.exec(`
    DROP TABLE IF EXISTS tasks;
    DROP TABLE IF EXISTS employees;
  `);

  // Create Employees table
  database.exec(`
    CREATE TABLE employees (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      role TEXT NOT NULL,
      avatar TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create Tasks table
  database.exec(`
    CREATE TABLE tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      status TEXT CHECK(status IN ('TODO', 'IN_PROGRESS', 'DONE')) DEFAULT 'TODO',
      assignee_id INTEGER,
      due_date DATETIME,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (assignee_id) REFERENCES employees(id)
    )
  `);

  // Seed Employees
  const insertEmployee = database.prepare(`
    INSERT INTO employees (name, email, role, avatar) VALUES (?, ?, ?, ?)
  `);

  const employees = [
    ['Alex Morgan', 'alex@example.com', 'Designer', 'https://ui-avatars.com/api/?name=Alex+Morgan&background=c7d2fe&color=3730a3'],
    ['Sarah Chen', 'sarah@example.com', 'Engineer', 'https://ui-avatars.com/api/?name=Sarah+Chen&background=bbf7d0&color=166534'],
    ['James Wilson', 'james@example.com', 'Product Manager', 'https://ui-avatars.com/api/?name=James+Wilson&background=fecaca&color=991b1b']
  ];

  employees.forEach(emp => insertEmployee.run(...emp));

  // Seed Tasks
  const insertTask = database.prepare(`
    INSERT INTO tasks (title, description, status, assignee_id, due_date) VALUES (?, ?, ?, ?, ?)
  `);

  const tasks = [
    ['Design System Refresh', 'Update color palette and typography tokens.', 'IN_PROGRESS', 1, '2024-12-01'],
    ['API Integration', 'Connect frontend to the new tasks endpoint.', 'TODO', 2, '2024-12-05'],
    ['Q4 Roadmap', 'Draft initial goals for next quarter.', 'DONE', 3, '2024-11-20'],
    ['Fix Login Bug', 'Investigate auth token expiry issue.', 'TODO', 2, '2024-12-02']
  ];

  tasks.forEach(task => insertTask.run(...task));

  console.log('Database initialized and seeded successfully.');
};

// Run if called directly
import { fileURLToPath } from 'url';
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  init();
}
