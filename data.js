export const initialUsers = [
  { id: 1, name: "Yogesh", email: "yoegsh1206@gmail.com", role: "Admin", status: "Active" },
  { id: 2, name: "Rekha", email: "ry1211@gmail.com", role: "Editor", status: "Inactive" },
];

export const initialRoles = [
  { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete", "Execute"] },
  { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  { id: 3, name: "Viewer", permissions: ["Read"] },
];

export const initialPermissions = [
  "Read",
  "Write",
  "Delete",
  "Execute",
];
