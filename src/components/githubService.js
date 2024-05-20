// src/services/githubService.js
const cache = {};

export async function fetchUser(username) {
  if (cache[username]) {
    return cache[username];
  }

  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  
  cache[username] = data;
  return data;
}

export async function fetchUserRepos(username, page = 1, perPage = 10) {
  const cacheKey = `${username}-repos-${page}-${perPage}`;
  if (cache[cacheKey]) {
    return cache[cacheKey];
  }

  const response = await fetch(`https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`);
  const data = await response.json();
  
  cache[cacheKey] = data;
  return data;
}
