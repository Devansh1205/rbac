import React from "react";

const PermissionTable = ({ permissions }) => {
  return (
    <div>
      <h3>Global Permissions</h3>
      <table>
        <thead>
          <tr>
            <th>Permission</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission, index) => (
            <tr key={index}>
              <td>{permission}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionTable;
