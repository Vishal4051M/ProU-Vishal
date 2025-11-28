import db from '../db/index.js';

export const getAllEmployees = () => {
  return db.prepare('SELECT * FROM employees ORDER BY name ASC').all();
};

export const createEmployee = (employee) => {
  const stmt = db.prepare(`
    INSERT INTO employees (name, email, role, avatar)
    VALUES (@name, @email, @role, @avatar)
  `);
  const info = stmt.run({
    avatar: null,
    ...employee
  });
  return { id: info.lastInsertRowid, ...employee };
};
