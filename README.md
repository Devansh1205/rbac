RBAC Admin Dashboard

A Role-Based Access Control (RBAC) Admin Dashboard built using React and Redux, designed to efficiently manage users, roles, and permissions. This application offers a simple and user-friendly interface for administrators to define and manage access controls dynamically.

Features

1.⁠ ⁠User Management
View all users in a table with details like name, email, and assigned role.
Add new users by filling out a form with name, email, and role.
Edit user details and update their assigned role.
Delete users from the system.
2.⁠ ⁠Role Management
View a list of all available roles.
Add new roles with custom names and permissions.
Edit existing roles to update their permissions.
Delete roles that are no longer required.
3.⁠ ⁠Permission Management
View all available permissions in the system.
Assign or revoke permissions dynamically for roles.
4.⁠ ⁠Dynamic Features
Assign roles directly to users during their creation or via editing.
Add new roles directly from the User Management page.
5.⁠ ⁠Validation
Input validation for forms:
Ensures all required fields are filled.
Validates email addresses for correct format.
Displays clear error messages for invalid inputs.
6.⁠ ⁠Responsive Design
Optimized for both desktop and mobile devices.
Getting Started

Follow these steps to set up the project on your local machine:

Prerequisites
Make sure you have the following installed:

Node.js: Version 16.x or higher
npm: Version 8.x or higher
Installation
Clone the repository:
git clone https://github.com/your-username/rbac-admin-dashboard.git
cd rbac-admin-dashboard
Install dependencies:
npm install
Start the development server:
npm run dev
Open the app in your browser:
http://localhost:5173
Project Structure

src/
├── components/               # Reusable UI components
│   ├── UserTable.jsx         # Displays users in a table
│   ├── RoleTable.jsx         # Displays roles in a table
│   ├── PermissionTable.jsx   # Displays permissions in a table
├── pages/                    # Pages for Users, Roles, and Permissions
│   ├── UsersPage.jsx         # User management
│   ├── RolesPage.jsx         # Role management
│   ├── PermissionsPage.jsx   # Permission management
├── redux/                    # Redux state management
│   ├── rbacSlice.js          # Reducers and actions
│   ├── store.js              # Redux store configuration
├── App.jsx                   # Root component
├── index.jsx                 # Entry point
Tech Stack

Frontend: React
State Management: Redux Toolkit
Styling: CSS (with animations and responsive design)
Package Management: npm
Future Enhancements

Audit Logs: Track all changes made to roles, permissions, and users.
Search and Filtering: Allow searching and filtering users, roles, and permissions.
Role Hierarchies: Implement role inheritance for simplified management.
Dark Mode: Add a toggle for light and dark themes.
Backend Integration: Connect to a backend API for persistent storage and additional security.
