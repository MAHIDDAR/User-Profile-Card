import './UserSelector.css';

function UserSelector({ users, selectedUser, onSelectUser }) {

  return (

    <div className="selector-container">

      <select
        value={selectedUser}
        onChange={(e) => onSelectUser(Number(e.target.value))}
      >

        {users.map((user) => (

          <option key={user.id} value={user.id}>

            {user.name}

          </option>

        ))}

      </select>

    </div>
  );
}

export default UserSelector;