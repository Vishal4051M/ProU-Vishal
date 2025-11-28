const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true';

import {
    getMockTasks,
    getMockEmployees,
    createMockTask,
    updateMockTask,
    deleteMockTask
} from './mockData';

export const fetchTasks = async (status) => {
    if (USE_MOCK) {
        console.log('Using Mock Data for fetchTasks');
        return getMockTasks(status);
    }
    const url = status && status !== 'ALL' ? `${API_URL}/tasks?status=${status}` : `${API_URL}/tasks`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch tasks');
    return res.json();
};

export const fetchEmployees = async () => {
    if (USE_MOCK) {
        console.log('Using Mock Data for fetchEmployees');
        return getMockEmployees();
    }
    const res = await fetch(`${API_URL}/employees`);
    if (!res.ok) throw new Error('Failed to fetch employees');
    return res.json();
};

export const createTask = async (task) => {
    if (USE_MOCK) {
        console.log('Using Mock Data for createTask');
        return createMockTask(task);
    }
    const res = await fetch(`${API_URL}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
    });
    if (!res.ok) throw new Error('Failed to create task');
    return res.json();
};

export const updateTask = async (id, updates) => {
    if (USE_MOCK) {
        console.log('Using Mock Data for updateTask');
        return updateMockTask(id, updates);
    }
    const res = await fetch(`${API_URL}/tasks/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
    });
    if (!res.ok) throw new Error('Failed to update task');
    return res.json();
};

export const deleteTask = async (id) => {
    if (USE_MOCK) {
        console.log('Using Mock Data for deleteTask');
        return deleteMockTask(id);
    }
    const res = await fetch(`${API_URL}/tasks/${id}`, {
        method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to delete task');
    return true;
};
