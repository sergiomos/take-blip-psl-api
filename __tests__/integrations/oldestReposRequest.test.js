const request = require('supertest');
const axios = require('axios');

const app = require('../../src/app');
const repositories = require('../mocks/repositories')
const repositoriesResponse = require('../mocks/repositoriesResponse')

const API_ROUTE = '/takeblip/repos'

jest.mock('axios');

describe('GET /takeblip/repos', () => {
  describe('Return the five oldest repositories', () => {
    beforeEach(() => {
      axios.get.mockImplementationOnce(() => Promise.resolve(repositories));
    })

    afterEach(() => jest.clearAllMocks())

    it('Get the repositories successfully', async () => {
        const response = await request(app).get(API_ROUTE);
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual(repositoriesResponse);
    });
  });
});
