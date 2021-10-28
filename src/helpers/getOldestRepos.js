const axios = require('axios');

const serialize = ({ full_name, owner, description, language }) => ({ 
  name: full_name, 
  coverImageUrl: owner.avatar_url, 
  description,
  language,
});

const parseToObject = (acc, repo, index) => ({ ...acc, [index]: repo, });

const resizeCoverImage = ({ coverImageUrl, ...repoInfos }) => ({ 
  ...repoInfos, 
  coverImageUrl: `${coverImageUrl}&s=200`,
});

const getOldestRepos = async () => {
  const { data } = await axios.get('https://api.github.com/orgs/takenet/repos');
  const repositories = data.filter(({ language }) => language === 'C#')
    .slice(0, 5)
    .map(serialize)
    .map(resizeCoverImage)
    .reduce(parseToObject, {});

  return repositories;
};

module.exports = getOldestRepos;
