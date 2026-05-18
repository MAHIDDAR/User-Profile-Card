import './UserSelector.css';

function UserSelector({ selectedUser, onSelectUser }) {

  return (
    <div className="user-selector">

      <label>Select User : </label>

      <select
        value={selectedUser}
        onChange={(e) => onSelectUser(e.target.value)}
      >

        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
        <option value="4">User 4</option>
        <option value="5">User 5</option>

      </select>

    </div>
  );
}

export default UserSelector;