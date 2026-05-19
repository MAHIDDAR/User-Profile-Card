import React, { useEffect, useState } from "react";

import "./App.css";

import UserDashboard from "./components/UserDashboard";
import UserForm from "./components/UserForm";
import SearchBar from "./components/SearchBar";

import {
  getUsers,
  addUser,
  updateUser,
  deleteUser
} from "./services/api";


function App() {

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const [editingUser, setEditingUser] = useState(null);


  useEffect(() => {

    fetchUsers();

  }, []);


  const fetchUsers = async () => {

    try {

      const data = await getUsers();

      setUsers(data);

      setLoading(false);

    } catch (error) {

      setError("Failed to fetch users");

      setLoading(false);
    }
  };


  const handleAddUser = async (userData) => {

    if (editingUser) {

      await updateUser(editingUser.id, userData);

      setEditingUser(null);

    } else {

      await addUser(userData);
    }

    fetchUsers();
  };


  const handleDelete = async (id) => {

    await deleteUser(id);

    fetchUsers();
  };


  const handleEdit = (user) => {

    setEditingUser(user);
  };


  const filteredUsers = users.filter((user) =>

    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||

    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );


  if (loading) {

    return <h2>Loading users...</h2>;
  }


  if (error) {

    return <h2>{error}</h2>;
  }


  return (

    <div className="app">

      <h1>User Management Dashboard</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <UserForm
        onSubmit={handleAddUser}
        editingUser={editingUser}
      />

      <UserDashboard
        users={filteredUsers}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

    </div>
  );
}

export default App;