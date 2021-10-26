const axios = require('axios');

const serialize = ({ name, owner, description, language }) => ({ 
  name, 
  coverImageUrl: owner.avatar_url, 
  description,
  language,
});

const parseToObject = (acc, repo, index) => ({ ...acc, [index]: repo, });

const getOldestRepos = async () => {
  const { data } = await axios.get('https://api.github.com/orgs/takenet/repos');
  const repositories = data.filter(({ language }) => language === 'C#')
    .slice(0, 5)
    .map(serialize)
    .reduce(parseToObject, {});

  return repositories;
};

module.exports = getOldestRepos;
