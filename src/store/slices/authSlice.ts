import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api"; // Adjust the import path accordingly
import { ILoginUser, ILogOutUser, IRegisterUser } from "../../utils/interface";
import { toast } from "react-toastify";

const initialState = {
  user: null,
  token: localStorage.getItem("token"),
  refreshToken: localStorage.getItem("refreshToken"),
  loading: false,
  error: null,
};

// Async thunk for login
export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData: ILoginUser, { rejectWithValue }) => {
    try {
      const response = await api.post("/ums/api/v1/user/login", userData); // Use the custom api instance
      return response.data; // Assuming the response contains user and token
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Login failed"); // Improved toast handling
      return rejectWithValue(error.response.data); // Handle errors
    }
  }
);

// Async thunk for registration
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData: IRegisterUser, { rejectWithValue }) => {
    try {
      const response = await api.post("/ums/api/v1/user/register", userData); // Use the custom api instance
      toast.success("Registration successful!"); // Toast on successful registration
      return response.data; // Assuming the response contains user and token
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Registration failed"); // Improved toast handling
      return rejectWithValue(error.response.data); // Handle errors
    }
  }
);

// Async thunk for logout
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (tokenData: ILogOutUser, { rejectWithValue }) => {
    try {
      await api.post("/ums/api/v1/user/logout", tokenData); // Call your logout API
      localStorage.removeItem("token"); // Remove token from local storage
      localStorage.removeItem("refreshToken");
      toast.success("Successfully logged out!"); // Toast on successful logout
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Logout failed"); // Improved toast handling
      return rejectWithValue(error.response.data); // Handle errors
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle login actions
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: any) => {
        state.loading = false;
        state.user = action.payload.payload.userDetails;
        state.token = action.payload.payload.token;
        state.refreshToken = action.payload.payload.refreshToken;
        localStorage.setItem("token", action.payload.payload.token);
        localStorage.setItem("refreshToken", action.payload.payload.refreshToken);
      })
      .addCase(loginUser.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle registration actions
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action: any) => {
        state.loading = false;
        state.user = action.payload.payload.userDetails;
      })
      .addCase(registerUser.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle logout actions
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
      })
      .addCase(logoutUser.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
