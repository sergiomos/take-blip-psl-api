const request = require('supertest');
const axios = require('axios');

const app = require('../../src/app');
const repositories = require('../mocks/repositories')

const API_ROUTE = '/takeblib/repos'

jest.mock('axios');

describe('GET /takeblip/repos', () => {
  describe('Return the five oldest repositories', () => {
    beforeEach(() => {
      axios.get.mockImplementationOnce(() => Promise.resolve(repositories));
    })

    afterEach(() => jest.clearAllMocks())

    it('Get the repositories successfully', () => {
      try {
        const response = await request(app).get(API_ROUTE);
        expect(response).toStrictEqual(repositories);
      } catch (error) {
        console.log(error);
      }
    });
  });
});
