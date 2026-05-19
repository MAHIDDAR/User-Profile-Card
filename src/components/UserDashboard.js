import React from "react";
import "./UserDashboard.css";

const UserDashboard = ({
  users,
  onDelete,
  onEdit
}) => {

  return (
    <div className="dashboard-container">

      {users.map((user) => (

        <div className="user-card" key={user.id}>

          <h2>{user.name}</h2>

          <p><strong>Email:</strong> {user.email}</p>

          <p><strong>Role:</strong> {user.role}</p>

          <p><strong>Company:</strong> {user.company}</p>

          <p><strong>Website:</strong> {user.website}</p>

          <p>{user.bio}</p>

          <div className="button-group">

            <button
              className="edit-btn"
              onClick={() => onEdit(user)}
            >
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => onDelete(user.id)}
            >
              Delete
            </button>

          </div>

        </div>
      ))}

    </div>
  );
};

export default UserDashboard;