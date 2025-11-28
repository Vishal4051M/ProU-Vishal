import db from './src/db/index.js';

const tasks = db.prepare('SELECT * FROM tasks').all();
console.log('Tasks:', tasks);

const employees = db.prepare('SELECT * FROM employees').all();
console.log('Employees:', employees);
