import { useState } from 'react';
import './ProfileCard.css';

function ProfileCard(props) {

  const [follow, setFollow] = useState(false);

  const handleFollow = () => {
    setFollow(!follow);
  }

  return (
    <div className='card'>

      <img
        src={props.image}
        alt='profile'
        className='profile-image'
      />

      <h2>{props.name}</h2>

      <h4>{props.role}</h4>
 
      
      <p>{props.bio}</p>

      <h5>{props.location}</h5>
      
      <button onClick={handleFollow}>
        {follow ? 'Following' : 'Follow'}
      </button>

    </div>
  );
}

export default ProfileCard;
