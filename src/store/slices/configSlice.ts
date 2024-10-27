import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  configurations: [],
  loading: false,
  error: null,
};

const configSlice = createSlice({
  name: "configurations",
  initialState,
  reducers: {
    fetchConfigsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchConfigsSuccess: (state, action) => {
      state.loading = false;
      state.configurations = action.payload;
    },
    fetchConfigsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addConfig: (state, action) => {
      state.configurations.push(action.payload);
    },
    updateConfig: (state, action) => {
      const index = state.configurations.findIndex(
        (config) => config.id === action.payload.id
      );
      if (index !== -1) {
        state.configurations[index] = action.payload;
      }
    },
    deleteConfig: (state, action) => {
      state.configurations = state.configurations.filter(
        (config) => config.id !== action.payload
      );
    },
  },
});

export const {
  fetchConfigsStart,
  fetchConfigsSuccess,
  fetchConfigsFailure,
  addConfig,
  updateConfig,
  deleteConfig,
} = configSlice.actions;
export default configSlice.reducer;
