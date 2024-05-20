// src/components/UserProfile.js
import React from 'react';

function UserProfile({ user }) {
  if (!user) return null;

  return (
    <div>
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>
  );
}

export default UserProfile;
