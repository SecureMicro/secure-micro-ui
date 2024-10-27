import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Configuration = {
  id: string;
  name: string;
  // Add other fields as needed
};

interface ConfigState {
  configurations: Configuration[];
  loading: boolean;
  error: string | null;
}

const initialState: ConfigState = {
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
    fetchConfigsSuccess: (state, action: PayloadAction<Configuration[]>) => {
      state.loading = false;
      state.configurations = action.payload;
    },
    fetchConfigsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    addConfig: (state, action: PayloadAction<Configuration>) => {
      state.configurations.push(action.payload);
    },
    updateConfig: (state, action: PayloadAction<Configuration>) => {
      const index = state.configurations.findIndex(
        (config) => config.id === action.payload.id
      );
      if (index !== -1) {
        state.configurations[index] = action.payload;
      }
    },
    deleteConfig: (state, action: PayloadAction<string>) => {
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
