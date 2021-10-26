const axios = require('axios');

const serialize = (repo) => {
  const { id, name, owner, created_at, description, url } = repo

  return {
    id, 
    name, 
    owner,
    createdAt: created_at, 
    description, 
    url,
  }
}

const getOldestRepos = async() => {
  const { data } = await axios.get('https://api.github.com/orgs/takenet/repos');

  return data.slice(0, 5).map(serialize);
};

module.exports = getOldestRepos;
