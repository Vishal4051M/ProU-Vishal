import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import taskRoutes from './routes/tasks.js';
import employeeRoutes from './routes/employees.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes
app.use('/api/tasks', taskRoutes);
app.use('/api/employees', employeeRoutes);

// Error handling
app.use(errorHandler);

export default app;
