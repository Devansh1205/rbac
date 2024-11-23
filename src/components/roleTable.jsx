import React from "react";

const RoleTable = ({ roles, onEditRole }) => {
  return (
    <div>
      <h3>Roles</h3>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>
                {role.permissions.join(", ") || "No Permissions Assigned"}
              </td>
              <td>
                <button onClick={() => onEditRole(role)}>
                  Edit Permissions
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleTable;
