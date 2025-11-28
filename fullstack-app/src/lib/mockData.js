
export const mockEmployees = [
    { id: 1, name: 'Alice Johnson', role: 'Frontend Developer', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', role: 'Backend Developer', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Brown', role: 'Project Manager', email: 'charlie@example.com' },
    { id: 4, name: 'Diana Prince', role: 'Designer', email: 'diana@example.com' },
];

let mockTasks = [
    { id: 1, title: 'Design Homepage', description: 'Create a responsive homepage design', status: 'DONE', assignee_id: 4 },
    { id: 2, title: 'Implement API', description: 'Setup Node.js Express server', status: 'IN_PROGRESS', assignee_id: 2 },
    { id: 3, title: 'Connect Frontend to API', description: 'Fetch data from endpoints', status: 'TODO', assignee_id: 1 },
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
