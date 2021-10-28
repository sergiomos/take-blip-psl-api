const axios = require('axios');

const repositories = require('../mocks/repositories')

const getOldestRepos = require('../../src/helpers/getOldestRepos');

jest.mock('axios');

describe('Get the oldest repositories', () => {
  beforeEach(() => {
    axios.get.mockImplementationOnce(() => Promise.resolve(repositories));
  })

  afterEach(() => jest.clearAllMocks());

  it('should return an object and length of five', async () => {
    const response = await getOldestRepos();
    const data = Object.values(response);

    expect(typeof response).toBe('object');
    expect(data).toHaveLength(5);
  });

  it('each repository should only have name, createdAt, owner, url, id, description, language properties', async() => {
      const response = await getOldestRepos();
      const data = Object.values(response);

      const reposTest = data.map((repository) => {
        expect(repository).toHaveProperty('name');
        expect(repository.name).not.toBe(null);

        expect(repository).toHaveProperty('coverImageUrl');
        expect(repository.coverImageUrl).not.toBe(null);

        expect(repository).toHaveProperty('description');
        expect(repository.description).not.toBe(null);

        expect(repository).toHaveProperty('language');
        expect(repository.language).toBe('C#');
      });
  
      await Promise.all(reposTest);
  });
});
