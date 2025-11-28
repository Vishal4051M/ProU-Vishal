import db from '../db/index.js';

export const getAllTasks = (filters = {}) => {
    let query = 'SELECT t.*, e.name as assignee_name, e.avatar as assignee_avatar FROM tasks t LEFT JOIN employees e ON t.assignee_id = e.id';
    const params = [];
    const conditions = [];

    if (filters.status) {
        conditions.push('t.status = ?');
        params.push(filters.status);
    }

    if (filters.assignee_id) {
        conditions.push('t.assignee_id = ?');
        params.push(filters.assignee_id);
    }

    if (conditions.length > 0) {
        query += ' WHERE ' + conditions.join(' AND ');
    }

    query += ' ORDER BY t.created_at DESC';

    return db.prepare(query).all(...params);
};

export const createTask = (task) => {
    const stmt = db.prepare(`
    INSERT INTO tasks (title, description, status, assignee_id, due_date)
    VALUES (@title, @description, @status, @assignee_id, @due_date)
  `);
    const info = stmt.run({
        description: null,
        due_date: null,
        ...task
    });
    return { id: info.lastInsertRowid, ...task };
};

export const updateTask = (id, updates) => {
    const fields = Object.keys(updates).map(key => `${key} = ?`).join(', ');
    const values = Object.values(updates);

    if (fields.length === 0) return null;

    const stmt = db.prepare(`UPDATE tasks SET ${fields} WHERE id = ?`);
    const info = stmt.run(...values, id);

    if (info.changes === 0) return null;
    return { id, ...updates };
};

export const deleteTask = (id) => {
    const stmt = db.prepare('DELETE FROM tasks WHERE id = ?');
    const info = stmt.run(id);
    return info.changes > 0;
};
