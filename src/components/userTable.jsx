import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteUser,
  assignUserRole,
  changeUserStatus,
} from "../redux/rbacSlice";

const UserTable = ({ users, roles }) => {
  const dispatch = useDispatch();

  const toggleStatus = (user) => {
    const newStatus = user.status === "Active" ? "Inactive" : "Active";
    dispatch(changeUserStatus({ userId: user.id, status: newStatus }));
  };

  const handleRoleChange = (userId, role) => {
    dispatch(assignUserRole({ userId, role }));
  };

  return (
    <div>
      <h3 className="section-header">User Management</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                >
                  {roles.map((role) => (
                    <option key={role.id} value={role.name}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <button
                  onClick={() => toggleStatus(user)}
                  style={{
                    color: user.status === "Active" ? "green" : "red",
                  }}
                >
                  {user.status}
                </button>
              </td>
              <td>
                <button
                  onClick={() => dispatch(deleteUser(user.id))}
                  className="dlt"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
