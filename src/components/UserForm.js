import React, { useState, useEffect } from "react";
import "./UserForm.css";

const UserForm = ({ onSubmit, editingUser }) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    bio: "",
    company: "",
    website: "",
  });


  useEffect(() => {

    if (editingUser) {

      setFormData(editingUser);
    }

  }, [editingUser]);


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {

    e.preventDefault();

    onSubmit(formData);

    setFormData({
      name: "",
      email: "",
      role: "",
      bio: "",
      company: "",
      website: "",
    });
  };


  return (

    <form className="user-form" onSubmit={handleSubmit}>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="role"
        placeholder="Role"
        value={formData.role}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="company"
        placeholder="Company"
        value={formData.company}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="website"
        placeholder="Website"
        value={formData.website}
        onChange={handleChange}
        required
      />

      <textarea
         name="bio"
  placeholder="Bio"
  value={formData.bio}
  onChange={handleChange}
  required
/>

     <button
  type="submit"
  disabled={
    !formData.name ||
    !formData.email ||
    !formData.role ||
    !formData.company ||
    !formData.website ||
    !formData.bio
  }
>

  {editingUser ? "Update User" : "Add User"}

</button>
    </form>
  );
};

export default UserForm;