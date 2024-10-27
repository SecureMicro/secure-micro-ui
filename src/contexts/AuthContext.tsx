import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess, logout } from "../store/slices/authSlice";
import { authService } from "../services/auth.service";

// Define the shape of the AuthContext
interface AuthContextType {
  // Define any additional properties for auth (e.g., user, login, logout)
}

// Initialize AuthContext with the appropriate type or null
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
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
