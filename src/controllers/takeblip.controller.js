const getOldestRepos = require('../helpers/getOldestRepos')

exports.getOldestRepositories = async (_req, res) => {
  const repositories = await getOldestRepos()

  res.status(200).json(repositories);
}
