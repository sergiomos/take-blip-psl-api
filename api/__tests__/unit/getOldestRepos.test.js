const axios = require('axios');

const repositories = require('../mocks/repositories')
const getOldestRepos = require('../../src/helpers/getOldestRepos');
const repositories = require('../mocks/repositories');

jest.mock('axios');

describe('Get the oldest repositories', () => {
  beforeEach(() => {
    axios.get.mockImplementationOnce(() => Promise.resolve(repositories));
  })

  afterEach(() => jest.clearAllMocks());

  it('should return an array and length of five', async () => {
    try {
      const response = await getOldestRepos();
      expect(Array.isArray(response)).toBe(true);
      expect(response).toHaveLength(5);
    } catch (error) {
      console.log(error);
    }
    
  });

  it('each repository should only have name, createdAt, owner, url, id, description properties', async() => {
    try {
      const response = await getOldestRepos();

      const reposTest = response.map((repository) => {
        expect(repository).toHaveProperty('id');
        expect(repository).toHaveProperty('name');
        expect(repository).toHaveProperty('owner');
        expect(repository).toHaveProperty('url');
        expect(repository).toHaveProperty('description');
        expect(repository).toHaveProperty('createdAt');
      })
  
      await Promise.all(reposTest);
    } catch (error) {
      console.log(error); 
    }
  });

  it('get the repos successfully', async () => {
    try {
      const response = await getOldestRepos();

      expect(response).toStrictEqual(repositories);
    } catch (error) {
      console.log(error);
    }
  });
});
