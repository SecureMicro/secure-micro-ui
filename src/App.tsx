import React from "react";
import { ThemeProvider } from "@mui/material";
import "./App.css";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import store from "./store";
import "react-toastify/ReactToastify.css";
import DashboardLayout from "./components/layouts/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/auth/Login";
import Services from "./pages/services/Services";
import Configurations from "./pages/configurations/Configurations";
import Users from "./pages/users/Users";
import Settings from "./pages/settings/Settings";
import { ROUTES } from "./config/routes";
import { lightTheme } from "./config/theme";
import Register from "./pages/auth/Register";
import Profile from "./pages/profile/Profile";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Provider store={store}>
      <Router>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />

          {/* Protected Routes */}
          <Route element={<DashboardLayout />}>
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
            <Route path={ROUTES.SERVICES} element={<Services />} />
            <Route path={ROUTES.CONFIGURATIONS} element={<Configurations />} />
            <Route path={ROUTES.USERS} element={<Users />} />
            <Route path={ROUTES.SETTINGS} element={<Settings />} />
            <Route path={ROUTES.PROFILE}  element={<Profile />} />
          </Route>

          {/* Redirect unmatched routes to dashboard */}
          <Route
            path="*"
            element={<Navigate to={ROUTES.LOGIN} replace />}
          />
        </Routes>
      </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
