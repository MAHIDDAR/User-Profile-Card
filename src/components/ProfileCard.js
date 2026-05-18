import { useState } from 'react';

import './ProfileCard.css';

function ProfileCard(props) {

  const [following, setFollowing] = useState(false);

  // follow button toggle

  const handleFollow = () => {

    setFollowing(!following);
  };

  return (

    <div className="card">

      <img
        src={props.image}
        alt={props.name}
        className="profile-image"
      />

      <h2>{props.name}</h2>

      <h4>{props.role}</h4>

      <p>{props.bio}</p>

      <div className="user-details">

        <p>
          <strong>Email :</strong> {props.email}
        </p>

        <p>
          <strong>Company :</strong> {props.company}
        </p>

        <p>
          <strong>Website :</strong> {props.website}
        </p>

      </div>

      <button onClick={handleFollow}>

        {following ? 'Following' : 'Follow'}

      </button>

    </div>
  );
}

export default ProfileCard;