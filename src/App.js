import { useEffect, useState } from 'react';

import './App.css';

import ProfileCard from './components/ProfileCard';
import UserSelector from './components/UserSelector';

import { fetchUserData } from './services/api';

import user1 from './assets/user1.jpg';
import user2 from './assets/user2.jpg';
import user3 from './assets/user3.jpg';
import user4 from './assets/user4.jpg';
import user5 from './assets/user5.jpg';

function App() {

  const [userData, setUserData] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState('');

  const [selectedUser, setSelectedUser] = useState(1);


  const extraUserDetails = {

    1: {
      name: 'Mahiddar Reddy',
      image: user1,
      role: 'Associate Software Engineer',
      bio: 'Focused on improving coding skills and building practical projects.'
    },

    2: {
      name: 'Rahul Kumar',
      image: user2,
      role: 'UI/UX Designer',
      bio: 'Passionate about creating modern and user-friendly designs.'
    },

    3: {
      name: 'Rupesh',
      image: user3,
      role: 'Backend Developer',
      bio: 'Enjoy working with APIs and database integration.'
    },

    4: {
      name: 'Charan',
      image: user4,
      role: 'Full Stack Developer',
      bio: 'Learning both frontend and backend technologies step by step.'
    },

    5: {
      name: 'Muzamil',
      image: user5,
      role: 'Frontend Developer',
      bio: 'Interested in building responsive web applications using React.'
    }

  };



  useEffect(() => {

    const getUser = async () => {

      try {

        setLoading(true);

        setError('');

        const data = await fetchUserData(selectedUser);

        setUserData(data);

      } catch (err) {

        setError('Unable to fetch user details.');

      } finally {

        setLoading(false);
      }

    };

    getUser();

  }, [selectedUser]);

  return (

    <div className="app">

      <h1 className="main-heading">
        Dynamic User Profile Card
      </h1>

      <UserSelector
        selectedUser={selectedUser}
        onSelectUser={setSelectedUser}
      />

      {loading && (
        <h2 className="message">
          Loading user data...
        </h2>
      )}

      {error && (
        <h2 className="message error">
          {error}
        </h2>
      )}

      {userData && !loading && (

        <ProfileCard

          image={extraUserDetails[selectedUser].image}

          name={extraUserDetails[selectedUser].name}

          role={extraUserDetails[selectedUser].role}

          bio={extraUserDetails[selectedUser].bio}

          email={userData.email}

          company={userData.company.name}

          website={userData.website}

        />

      )}

    </div>
  );
}

export default App;