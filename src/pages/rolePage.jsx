import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRole, modifyRolePermissions } from "../redux/rbacSlice";
import RoleTable from "../components/roleTable";

const RolesPage = () => {
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.rbac.roles);
  const permissions = useSelector((state) => state.rbac.permissions);

  const [newRole, setNewRole] = useState({ name: "", permissions: [] });
  const [selectedRole, setSelectedRole] = useState(null);
  const [updatedPermissions, setUpdatedPermissions] = useState([]);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setUpdatedPermissions(role.permissions); // Load current permissions for editing
  };

  const handlePermissionChange = (permission) => {
    setUpdatedPermissions(
      (prev) =>
        prev.includes(permission)
          ? prev.filter((perm) => perm !== permission) // Remove permission
          : [...prev, permission] // Add permission
    );
  };

  const savePermissions = () => {
    if (selectedRole) {
      dispatch(
        modifyRolePermissions({
          roleId: selectedRole.id,
          permissions: updatedPermissions,
        })
      );
      setSelectedRole(null);
      setUpdatedPermissions([]);
    }
  };

  // Handle adding a new role
  const handleAddRole = () => {
    if (!newRole.name.trim()) {
      alert("Role name cannot be empty!");
      return;
    }
    const newRoleId = roles.length
      ? Math.max(...roles.map((r) => r.id)) + 1
      : 1; // Generate unique ID
    dispatch(
      addRole({
        id: newRoleId,
        name: newRole.name.trim(),
        permissions: newRole.permissions,
      })
    );
    setNewRole({ name: "", permissions: [] }); // Reset the form
  };

  return (
    <div className="page-wrapper">
      <h2 className="section-header">Role Management</h2>

      {/* Add New Role */}
      <div className="form-container">
        <h3>Add New Role</h3>
        <input
          type="text"
          placeholder="Enter role name"
          value={newRole.name}
          onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
        />
        <div className="checkbox-container">
          <h4>Select Permissions</h4>
          {permissions.map((permission, index) => (
            <label key={index}>
              <input
                type="checkbox"
                checked={newRole.permissions.includes(permission)}
                onChange={() =>
                  setNewRole((prev) => ({
                    ...prev,
                    permissions: prev.permissions.includes(permission)
                      ? prev.permissions.filter((perm) => perm !== permission) // Remove permission
                      : [...prev.permissions, permission], // Add permission
                  }))
                }
              />
              {permission}
            </label>
          ))}
        </div>
        <button onClick={handleAddRole}>Add Role</button>
      </div>

      {/* Role Table */}
      <RoleTable roles={roles} onEditRole={handleRoleSelect} />

      {/* Edit Permissions */}
      {selectedRole && (
        <div className="form-container">
          <h3>Edit Role: {selectedRole.name}</h3>
          <div className="checkbox-container">
            <h4>Select Permissions</h4>
            {permissions.map((permission, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  checked={updatedPermissions.includes(permission)}
                  onChange={() => handlePermissionChange(permission)}
                />
                {permission}
              </label>
            ))}
          </div>
          <button onClick={savePermissions}>Save Permissions</button>
          <button onClick={() => setSelectedRole(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default RolesPage;
