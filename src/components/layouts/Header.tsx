// Header.tsx
import React, { useEffect, useState } from "react";
import { Bell, User } from "lucide-react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { ROUTES } from "../../config/routes";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/slices/authSlice"; // Adjust the import path accordingly
import { toast } from "react-toastify";
import { fetchProfile } from "../../store/slices/profileSlice"; // Adjust the import path accordingly

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Get user state from Redux store
  const user = useSelector((state: { auth: { user: any } }) => state.auth.user);
  const userProfile = useSelector(
    (state: { profile: { userProfile: any } }) => state.profile.userProfile
  );

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      // @ts-ignore
      await dispatch(logoutUser({ refreshToken })).unwrap(); // Call the logout action
      toast.success("Successfully logged out!"); // Show success message
      navigate(ROUTES.LOGIN); // Redirect to login page
    } catch (error) {
      toast.error("Logout failed!"); // Show error message
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // @ts-ignore
      dispatch(fetchProfile());
    }
  }, [dispatch]);

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
            {/* Conditionally render menu items based on user login state */}
            {user || userProfile ? (
              <>
                <MenuItem onClick={() => navigate(ROUTES.CONFIGURATIONS)}>
                  Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </>
            ) : (
              <MenuItem
                onClick={() => {
                  navigate(ROUTES.LOGIN);
                  handleClose();
                }}
              >
                Login
              </MenuItem>
            )}
            {/* Add more menu items as needed */}
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
