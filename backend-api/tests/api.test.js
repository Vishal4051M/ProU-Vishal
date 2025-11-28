import request from 'supertest';
import app from '../src/app.js';
import db from '../src/db/index.js';
import { init } from '../src/db/init.js';

describe('API Endpoints', () => {
    beforeAll(() => {
        // Setup test DB state
        init(db);
    });

    it('should create a new employee', async () => {
        const res = await request(app)
            .post('/api/employees')
            .send({
                name: 'New Employee',
                email: 'new@test.com',
                role: 'Designer'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id');
    });

    it('should create a new task', async () => {
        const res = await request(app)
            .post('/api/tasks')
            .send({
                title: 'Test Task',
                description: 'Testing',
                assignee_id: 1,
                status: 'TODO'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body.title).toEqual('Test Task');
    });

    it('should filter tasks by status', async () => {
        await request(app).post('/api/tasks').send({
            title: 'Done Task',
            assignee_id: 1,
            status: 'DONE'
        });

        const res = await request(app).get('/api/tasks?status=DONE');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body[0].status).toEqual('DONE');
    });
});
