import React from "react";
import { ThemeProvider } from "@mui/material";
import "./App.css";
// import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import store from "./Redux/Store";
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

const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      {/* <Provider store={store}> */}
      <Router>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login />} />

          {/* Protected Routes */}
          <Route element={<DashboardLayout />}>
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
            <Route path={ROUTES.SERVICES} element={<Services />} />
            <Route path={ROUTES.CONFIGURATIONS} element={<Configurations />} />
            <Route path={ROUTES.USERS} element={<Users />} />
            <Route path={ROUTES.SETTINGS} element={<Settings />} />
          </Route>

          {/* Redirect unmatched routes to dashboard */}
          <Route
            path="*"
            element={<Navigate to={ROUTES.DASHBOARD} replace />}
          />
        </Routes>
      </Router>
      {/* </Provider> */}
    </ThemeProvider>
    // <h1 className="text-4xl text-blue-700">Hello</h1>
  );
};

export default App;
