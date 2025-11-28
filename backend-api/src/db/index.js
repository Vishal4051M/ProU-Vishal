import Database from 'better-sqlite3';
import path from 'path';

const dbPath = process.env.NODE_ENV === 'test' ? ':memory:' : (process.env.DB_PATH || './prou.db');

const db = new Database(dbPath, {
    verbose: process.env.NODE_ENV === 'development' ? console.log : null
});

if (process.env.NODE_ENV !== 'test') {
    db.pragma('journal_mode = WAL');
}

export default db;
