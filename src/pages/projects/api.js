const fetchDataFromGithubApi = async apiUrl => {
  const token = import.meta.env.GITHUB_TOKEN;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    const data = await response.json();
    const paths = data.map(item => item.path);
    return paths;
    
  } catch (error) {
    throw new Error('Oops, an error occurred: ' + error);
  }
};

export { fetchDataFromGithubApi };
