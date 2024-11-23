import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, assignUserRole } from "../redux/rbacSlice";
import UserTable from "../components/userTable";

const UsersPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.rbac.users);
  const roles = useSelector((state) => state.rbac.roles);

  const [newUser, setNewUser] = useState({ name: "", email: "", role: "" });
  const [error, setError] = useState(""); // To store error messages

  // Email validation regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return emailRegex.test(email);
  };

  const handleAddUser = () => {
    // Validate input fields
    if (!newUser.name.trim()) {
      setError("Name cannot be empty.");
      return;
    }
    if (!validateEmail(newUser.email)) {
      setError("Invalid email address.");
      return;
    }
    if (!newUser.role) {
      setError("Please select a role.");
      return;
    }

    // If all inputs are valid, add the user
    const id = users.length + 1;
    dispatch(addUser({ ...newUser, id }));
    setNewUser({ name: "", email: "", role: "" }); // Reset form
    setError(""); // Clear errors
  };

  const handleRoleChange = (userId, role) => {
    dispatch(assignUserRole({ userId, role }));
  };

  return (
    <div className="page-wrapper">
      <UserTable users={users} roles={roles} onRoleChange={handleRoleChange} />
      <h3 className="section-header">Add New User</h3>
      {error && <p className="error-message">{error}</p>}{" "}
      {/* Display error message */}
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <select
        value={newUser.role}
        onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
      >
        <option value="">Select Role</option>
        {roles.map((role) => (
          <option key={role.id} value={role.name}>
            {role.name}
          </option>
        ))}
      </select>
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default UsersPage;
