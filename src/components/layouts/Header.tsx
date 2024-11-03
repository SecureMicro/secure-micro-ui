import React, { useState } from "react";
import { Bell, User } from "lucide-react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
// import UserModal from '../user/UserModal';
import { IconButton, Menu, MenuItem } from "@mui/material";
import { ROUTES } from "../../config/routes";

const Header: React.FC = () => {
  // const [isUserModalOpen, setUserModalOpen] = useState(false);

  // const handleOpenModal = () => {
  //   setUserModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setUserModalOpen(false);
  // };

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="h-16 bg-white border-b border-gray-200 fixed top-0 right-0 left-64 z-10">
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex-1" />
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>
          <IconButton onClick={handleClick}>
            <User className="w-5 h-5" />
          </IconButton>
          <Menu
            style={{
              minWidth: 180,
              boxShadow:
                "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
            }}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem
              onClick={() => {
                navigate(ROUTES.LOGIN);
              }}
            >
              Login
            </MenuItem>
            {/* Add more menu items as needed */}
          </Menu>
        </div>
      </div>

      {/* User Modal
      <UserModal open={isUserModalOpen} onClose={handleCloseModal} /> */}
    </header>
  );
};

export default Header;
