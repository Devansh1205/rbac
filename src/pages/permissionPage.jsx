import React from "react";
import { useSelector } from "react-redux";
import PermissionTable from "../components/permissionTable";

const PermissionsPage = () => {
  const permissions = useSelector((state) => state.rbac.permissions);

  return (
    <div>
      <h1>Permissions</h1>
      <PermissionTable permissions={permissions} />
    </div>
  );
};

export default PermissionsPage;
