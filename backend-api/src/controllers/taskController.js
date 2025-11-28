import * as taskService from '../services/taskService.js';
import Joi from 'joi';

const taskSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().allow('', null),
    status: Joi.string().valid('TODO', 'IN_PROGRESS', 'DONE').default('TODO'),
    assignee_id: Joi.number().integer().required(),
    due_date: Joi.string().isoDate().allow(null)
});

export const getTasks = (req, res, next) => {
    try {
        const filters = {
            status: req.query.status,
            assignee_id: req.query.assignee_id
        };
        const tasks = taskService.getAllTasks(filters);
        res.json(tasks);
    } catch (err) {
        next(err);
    }
};

export const createTask = (req, res, next) => {
    try {
        const { error, value } = taskSchema.validate(req.body);
        if (error) {
            const err = new Error('Validation failed');
            err.type = 'validation';
            err.details = error.details;
            throw err;
        }

        const newTask = taskService.createTask(value);
        res.status(201).json(newTask);
    } catch (err) {
        next(err);
    }
};

export const updateTask = (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedTask = taskService.updateTask(id, req.body);
        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(updatedTask);
    } catch (err) {
        next(err);
    }
};

export const deleteTask = (req, res, next) => {
    try {
        const { id } = req.params;
        const success = taskService.deleteTask(id);
        if (!success) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(204).send();
    } catch (err) {
        next(err);
    }
};
