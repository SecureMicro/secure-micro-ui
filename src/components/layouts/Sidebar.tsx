import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Settings, 
  Users, 
  Box, 
  Sliders
} from 'lucide-react';
import { ROUTES } from '../../config/routes';

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', path: ROUTES.DASHBOARD },
    { icon: Box, label: 'Services', path: ROUTES.SERVICES },
    { icon: Sliders, label: 'Configurations', path: ROUTES.CONFIGURATIONS },
    { icon: Users, label: 'Users', path: ROUTES.USERS },
    { icon: Settings, label: 'Settings', path: ROUTES.SETTINGS }
  ];

  return (
    <div className="w-64 h-screen bg-blue-600 border-r border-gray-200 fixed left-0 top-0">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold">SecureMicro</h1>
      </div>
      <nav className="p-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-2 rounded-md mb-1 ${
                isActive 
                  ? 'bg-gray-100 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;