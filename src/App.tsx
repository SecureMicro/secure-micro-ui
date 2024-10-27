import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
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
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/auth/Login";
import Services from "./pages/services/Services";
import Configurations from "./pages/configurations/Configurations";
import Users from "./pages/users/Users";
import Settings from "./pages/settings/Settings";
import { ROUTES } from "./config/routes";

const App: React.FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0E0E0E",
      },
      secondary: {
        main: "#7A7A7A",
      },
      // active: {
      //   main: "#ECECEC",
      // },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 1000,
        lg: 1200,
        xl: 1440,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
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
  );
};

export default App;
