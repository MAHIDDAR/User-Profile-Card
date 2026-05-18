import { useEffect, useState } from 'react';

import './App.css';

import ProfileCard from './components/ProfileCard';
import UserDetailsCard from './components/UserDetailsCard';
import UserSelector from './components/UserSelector';

import { fetchUsers } from './services/api';

function App() {

  const [users, setUsers] = useState([]);

  const [selectedUser, setSelectedUser] = useState(1);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState('');

  useEffect(() => {

    const loadUsers = async () => {

      try {

        setLoading(true);

        const data = await fetchUsers();

        setUsers(data);

      } catch (err) {

        setError('Unable to fetch user data.');

      } finally {

        setLoading(false);
      }
    };

    loadUsers();

  }, []);

  const currentUser = users.find(
    (user) => user.id === selectedUser
  );

  return (

    <div className="app">

      <h1 className="main-heading">
        Dynamic User Profile Dashboard
      </h1>

      {loading && (
        <h2 className="message">
          Loading users...
        </h2>
      )}

      {error && (
        <h2 className="message error">
          {error}
        </h2>
      )}

      {!loading && users.length > 0 && (

        <>

          <UserSelector
            users={users}
            selectedUser={selectedUser}
            onSelectUser={setSelectedUser}
          />

          <div className="cards-container">

            <ProfileCard user={currentUser} />

            <UserDetailsCard user={currentUser} />

          </div>

        </>

      )}

    </div>
  );
}

export default App;