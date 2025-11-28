import mockData from '../mock-data.json';

const STORAGE_KEY = 'prou_mock_data';

export const getStore = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        return JSON.parse(stored);
    }
    // Initialize with mock data if empty
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockData));
    return mockData;
};

export const saveStore = (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const getTasks = () => {
    const store = getStore();
    // Join tasks with employees
    return store.tasks.map(task => ({
        ...task,
        assignee: store.employees.find(e => e.id === task.assignee_id)
    }));
};

export const getEmployees = () => {
    return getStore().employees;
};

export const addTask = (task) => {
    const store = getStore();
    const newTask = {
        ...task,
        id: Date.now(), // Simple ID generation
        created_at: new Date().toISOString()
    };
    store.tasks.push(newTask);
    saveStore(store);
    return newTask;
};

export const updateTask = (id, updates) => {
    const store = getStore();
    const index = store.tasks.findIndex(t => t.id === id);
    if (index === -1) return null;

    store.tasks[index] = { ...store.tasks[index], ...updates };
    saveStore(store);
    return store.tasks[index];
};

export const deleteTask = (id) => {
    const store = getStore();
    store.tasks = store.tasks.filter(t => t.id !== id);
    saveStore(store);
};
