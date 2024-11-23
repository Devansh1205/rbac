import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store"; // Import the Redux store
import UsersPage from "./pages/userPage";
import RolesPage from "./pages/rolePage.jsx";
import PermissionsPage from "./pages/permissionPage.jsx";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1
          className="section-header"
          style={{ textAlign: "center", marginBottom: "30px" }}
        >
          RBAC Admin Dashboard
        </h1>
        <div className="container">
          <div>
            <UsersPage />
          </div>
          <div>
            <RolesPage />
          </div>
          <div>
            <PermissionsPage />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
