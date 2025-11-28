
export const mockEmployees = [
    { id: 1, name: 'Vishal', role: 'Full Stack Developer', email: 'vishal@example.com' },
    { id: 2, name: 'Rishi', role: 'Backend Developer', email: 'rishi@example.com' },
    { id: 3, name: 'Siddu', role: 'Frontend Developer', email: 'siddu@example.com' },
    { id: 4, name: 'Hithes', role: 'UI/UX Designer', email: 'hithes@example.com' },
    { id: 5, name: 'Uday', role: 'Project Manager', email: 'uday@example.com' },
];

let mockTasks = [
    { id: 1, title: 'Design Homepage', description: 'Create a responsive homepage design', status: 'DONE', assignee_id: 4 },
    { id: 2, title: 'Implement API', description: 'Setup Node.js Express server', status: 'IN_PROGRESS', assignee_id: 2 },
    { id: 3, title: 'Connect Frontend to API', description: 'Fetch data from endpoints', status: 'TODO', assignee_id: 1 },
    { id: 4, title: 'Database Schema', description: 'Design SQL schema for employees', status: 'TODO', assignee_id: 5 },
];

// Simulate async delays
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getMockTasks = async (status) => {
    await delay(500);
    if (status && status !== 'ALL') {
        return mockTasks.filter(t => t.status === status);
    }
    return [...mockTasks];
};

export const getMockEmployees = async () => {
    await delay(500);
    return [...mockEmployees];
};

export const createMockTask = async (task) => {
    await delay(500);
    const newTask = { ...task, id: Date.now() };
    mockTasks.push(newTask);
    return newTask;
};

export const updateMockTask = async (id, updates) => {
    await delay(500);
    const index = mockTasks.findIndex(t => t.id === id);
    if (index !== -1) {
        mockTasks[index] = { ...mockTasks[index], ...updates };
        return mockTasks[index];
    }
    throw new Error('Task not found');
};

export const deleteMockTask = async (id) => {
    await delay(500);
    mockTasks = mockTasks.filter(t => t.id !== id);
    return true;
};
