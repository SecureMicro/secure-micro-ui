import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
// import Projects from './pages/';
// import ProjectDetails from './pages';
import Settings from './pages/settings/Settings';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    {/* <Route path="/projects" element={<Projects />} />
    <Route path="/projects/:id" element={<ProjectDetails />} /> */}
    <Route path="/settings" element={<Settings />} />
  </Routes>
);

export default AppRoutes;