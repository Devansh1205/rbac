import { configureStore } from "@reduxjs/toolkit";
import rbacReducer from "./rbacSlice";

// Configure and export the Redux store
const store = configureStore({
  reducer: {
    rbac: rbacReducer,
  },
});

export default store;
