import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import servicesReducer from './slices/servicesSlice';
import configReducer from './slices/configSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    services: servicesReducer,
    configurations: configReducer,
    users: userReducer,
  },
});

export default store;