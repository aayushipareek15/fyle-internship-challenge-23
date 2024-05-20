// src/tests/githubService.test.js
import { fetchUser, fetchUserRepos } from '../services/githubService';

test('fetches user data and caches it', async () => {
  const user = await fetchUser('octocat');
  expect(user).toHaveProperty('login', 'octocat');

  const cachedUser = await fetchUser('octocat');
  expect(cachedUser).toEqual(user);
});

test('fetches user repositories and caches them', async () => {
  const repos = await fetchUserRepos('octocat', 1, 10);
  expect(repos).toHaveLength(10);

  const cachedRepos = await fetchUserRepos('octocat', 1, 10);
  expect(cachedRepos).toEqual(repos);
});
