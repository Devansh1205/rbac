import { createSlice } from "@reduxjs/toolkit";
import { initialUsers, initialRoles, initialPermissions } from "../../data";

const rbacSlice = createSlice({
  name: "rbac",
  initialState: {
    users: initialUsers,
    roles: initialRoles, // Include both default roles and any custom roles
    permissions: initialPermissions,
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    editUser: (state, action) => {
      const index = state.users.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) state.users[index] = action.payload;
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    addRole: (state, action) => {
      // Add a custom role
      state.roles.push(action.payload);
    },
    editRole: (state, action) => {
      const index = state.roles.findIndex((role) => role.id === action.payload.id);
      if (index !== -1) state.roles[index] = action.payload;
    },
    deleteRole: (state, action) => {
      state.roles = state.roles.filter((role) => role.id !== action.payload);
    },
    assignUserRole: (state, action) => {
      const { userId, role } = action.payload;
      const user = state.users.find((user) => user.id === userId);
      if (user) {
        user.role = role;
      }
    },
    changeUserStatus: (state, action) => {
      const { userId, status } = action.payload;
      const user = state.users.find((user) => user.id === userId);
      if (user) {
        user.status = status;
      }
    },
    modifyRolePermissions: (state, action) => {
      const { roleId, permissions } = action.payload;
      const role = state.roles.find((role) => role.id === roleId);
      if (role) {
        role.permissions = permissions; // Update permissions dynamically
      }
    },
  },
});

export const {
  addUser,
  editUser,
  deleteUser,
  addRole,
  editRole,
  deleteRole,
  assignUserRole,
  changeUserStatus,
  modifyRolePermissions,
} = rbacSlice.actions;

export default rbacSlice.reducer;
