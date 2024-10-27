import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess, logout } from "../store/slices/authSlice";
import { authService } from "../services/auth.service";

const AuthContext = createContext(null);

export const AuthProvider: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const user = await authService.getCurrentUser();
          dispatch(loginSuccess({ user, token }));
        } catch (error) {
          dispatch(logout());
        }
      }
      setLoading(false);
    };

    initAuth();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
