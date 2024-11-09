import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import servicesReducer from "./slices/serviceSlice";
import configReducer from "./slices/configSlice";
import profileReducer from "./slices/profileSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    services: servicesReducer,
    configurations: configReducer,
    profile: profileReducer,
  },
});

export default store;
