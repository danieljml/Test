const fetchDataFromGithubApi = async apiUrl => {
  const mainRepoUrl = "https://raw.githubusercontent.com/AgustinCartaya/portfolio/agustin/src/my_projects/";
  const token = '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';

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
