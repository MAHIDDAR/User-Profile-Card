import { useState } from 'react';

import './ProfileCard.css';

function ProfileCard({ user }) {

  const [followedUsers, setFollowedUsers] = useState({});

  const handleFollow = () => {

  setFollowedUsers((prev) => ({

    ...prev,

    [user.id]: !prev[user.id]

  }));
};
  return (

    <div className="profile-card">

      <img
        src={`https://i.pravatar.cc/150?img=${user.id}`}
        alt={user.name}
        className="profile-image"
      />

      <h2>{user.name}</h2>

      <h4>@{user.username}</h4>

      <p className="short-bio">
        Passionate about frontend development and learning modern web technologies.
      </p>

      <button onClick={handleFollow}>

        {followedUsers[user.id] ? 'Following' : 'Follow'}

      </button>

    </div>
  );
}

export default ProfileCard;