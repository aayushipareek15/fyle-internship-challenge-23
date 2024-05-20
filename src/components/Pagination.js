// src/components/RepositoryList.js
import React from 'react';

function RepositoryList({ repos }) {
  if (!repos.length) return <p>No repositories found.</p>;

  return (
    <ul>
      {repos.map(repo => (
        <li key={repo.id}>
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
          <div>
            {repo.topics.map(topic => (
              <span key={topic}>{topic}</span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default RepositoryList;
