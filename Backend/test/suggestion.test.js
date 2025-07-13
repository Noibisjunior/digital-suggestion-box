const request = require('supertest');
const app = require('../app'); //express app
const pool = require('../DB');

describe('Suggestion API', () => {
  afterAll(async () => {
    await pool.end(); // Close DB connection
  });

  it('should return all suggestions (GET)', async () => {
    const res = await request(app).get('/api/suggestions');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should submit a new suggestion (POST)', async () => {
    const res = await request(app)
      .post('/api/suggestions')
      .send({
        title: 'Test Suggestion',
        description: 'This is just for testing',
        category: 'Testing',
        is_anonymous: true
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.suggestion).toHaveProperty('title', 'Test Suggestion');
  });
});
