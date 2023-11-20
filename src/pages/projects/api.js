const fetchDataFromGithubApi = async apiUrl => {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    console.dir(import.meta)
    console.dir(import.meta.env)
    const data = await response.json();
    const paths = data.map(item => item.path);
    return paths;
    
  } catch (error) {
    throw new Error('Oops, an error occurred: ' + error);
  }
};

export { fetchDataFromGithubApi };
