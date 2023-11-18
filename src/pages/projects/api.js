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
