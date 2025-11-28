import * as employeeService from '../services/employeeService.js';
import Joi from 'joi';

const employeeSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    role: Joi.string().required(),
    avatar: Joi.string().uri().optional()
});

export const getEmployees = (req, res, next) => {
    try {
        const employees = employeeService.getAllEmployees();
        res.json(employees);
    } catch (err) {
        next(err);
    }
};

export const createEmployee = (req, res, next) => {
    try {
        const { error, value } = employeeSchema.validate(req.body);
        if (error) {
            const err = new Error('Validation failed');
            err.type = 'validation';
            err.details = error.details;
            throw err;
        }

        const newEmployee = employeeService.createEmployee(value);
        res.status(201).json(newEmployee);
    } catch (err) {
        next(err);
    }
};
