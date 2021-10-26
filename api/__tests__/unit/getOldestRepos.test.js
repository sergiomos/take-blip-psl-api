const axios = require('axios');

const repositories = require('../mocks/repositories')

const getOldestRepos = require('../../src/helpers/getOldestRepos');

jest.mock('axios');

describe('Get the oldest repositories', () => {
  beforeEach(() => {
    axios.get.mockImplementationOnce(() => Promise.resolve(repositories));
  })

  afterEach(() => jest.clearAllMocks());

  it('should return an array and length of five', async () => {
    const response = await getOldestRepos();
    expect(Array.isArray(response)).toBe(true);
    expect(response).toHaveLength(5);
  });

  it('each repository should only have name, createdAt, owner, url, id, description properties', async() => {
      const response = await getOldestRepos();

      const reposTest = response.map((repository) => {
        expect(repository).toHaveProperty('id');
        expect(repository.id).not.toBe(null);

        expect(repository).toHaveProperty('name');
        expect(repository.name).not.toBe(null);

        expect(repository).toHaveProperty('owner');
        expect(repository.owner).not.toBe(null);

        expect(repository).toHaveProperty('url');
        expect(repository.url).not.toBe(null);

        expect(repository).toHaveProperty('description');
        expect(repository.description).not.toBe(null);

        expect(repository).toHaveProperty('createdAt');
        expect(repository.createdAt).not.toBe(null);

      })
  
      await Promise.all(reposTest);
  });
});
